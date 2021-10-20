import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "../app-routing.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        NgbModule,
        AppRoutingModule,
        CommonModule
    ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule {}
