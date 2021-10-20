import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {LocalStorageService} from "../../shared/services/local-storage.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogged!: boolean;

  constructor(
    public authService: AuthService,
    private local: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.isLogged = this.local.getUser() !== 'null';
    this.authService.isLogged
      .pipe(untilDestroyed(this))
      .subscribe(data => this.isLogged = data);
  }

}
