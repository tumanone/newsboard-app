import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./base/home-page/home-page.component";
import {NewsPageComponent} from "./base/news-page/news-page.component";
import {ProfilePageComponent} from "./base/profile-page/profile-page.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./base/base.module').then(m => m.BaseModule)
  },
  {
    path: 'news',
    component: NewsPageComponent,
    loadChildren: () => import('./base/news-page/news-page.module').then(m => m.NewsPageModule)
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
