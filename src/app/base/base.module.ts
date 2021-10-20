import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";



@NgModule({
  declarations: [
    HomePageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }
