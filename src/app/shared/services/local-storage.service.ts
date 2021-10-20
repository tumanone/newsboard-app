import firebase from "firebase/compat";
import User = firebase.User;
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {



  public getUser(): string | null {
    return localStorage.getItem('user')
  }

  public setUser(user: User | null): void {
    localStorage.setItem('user', JSON.stringify(user))
  }

  public removeUser(): void {
    localStorage.setItem('user', 'null')
  }
}
