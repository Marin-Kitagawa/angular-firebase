import { Component } from '@angular/core';
// import { AuthenticationService } from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'afv';
  // private authenticationService: AuthenticationService
  constructor() {
  }

  //email: string = '';
  //password: string = '';

  //signUp() {
  //  this.authenticationService.SignUp(this.email, this.password);
  //  this.email='';
  //  this.password='';
  //}

  //signIn() {
  //  this.authenticationService.SignIn(this.email, this.password);
  //}

  //signOut() {
  //  this.authenticationService.SignOut();
  //}
}
