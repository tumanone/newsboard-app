import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public isLogged!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.isLogged
      .pipe(untilDestroyed(this))
      .subscribe(data => this.isLogged = data)
  }

  canActivate(): boolean {
    console.log(this.isLogged)
    if (this.isLogged) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false
    }
  }
}
