import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {ReactiveFormComponent} from "./components/reactive-form/reactive-form.component";
import {TemplateDrivenFormComponent} from "./components/template-driven-form/template-driven-form.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {AngularFireAuthGuard, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {UnauthorizedComponent} from "./components/unauthorized/unauthorized.component";

const redirectUnAuthorizedToForbidden = () => redirectUnauthorizedTo(['unauthorized'])

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'template-form',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    // @ts-ignore
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnAuthorizedToForbidden },
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
