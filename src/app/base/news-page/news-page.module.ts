import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NewsPageModule { }
