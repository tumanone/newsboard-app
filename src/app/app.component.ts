import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {LocalStorageService} from "./shared/services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'newsboard-app';

  constructor(
    private authService: AuthService,
    private local: LocalStorageService
  ) {}

  ngOnInit() {
    this.authService.isLogged.next(this.local.getUser() !== 'null');
  }

}
