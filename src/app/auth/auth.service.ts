import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {LocalStorageService} from "../shared/services/local-storage.service";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  userData: any

  constructor(
    private local: LocalStorageService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.afAuth.authState
      .subscribe(user => {
      if (user) {
        this.userData = user;
        this.local.setUser(user);
      } else {
        this.local.setUser(null);
      }
    })
  }

  public signIn(user: { email: string, password: string }): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.isLogged.next(true);
        this.router.navigate(['/profile'])
      })
      .catch((error) => window.alert(error.message))
  }

  public signUp(user: { email: string, password: string }): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.isLogged.next(true);
        this.router.navigate(['/profile']);
      })
      .catch((error) => window.alert(error.message))
  }

  public logOut() {
    return this.afAuth.signOut().then(() => {
      this.isLogged.next(false);
      this.router.navigate(['/login'])
      this.local.removeUser();
    })
  }
}

