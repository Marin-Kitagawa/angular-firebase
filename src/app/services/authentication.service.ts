import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("You are successfully signed up!", res);
      })
      .catch(error => {
        console.log("Something is wrong: ", error.message);
      });
  };

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("You're in");
      })
      .catch(err => {
        console.log("Something went wrong ", err.message);
      });
  }

  SignOut() {
    this.angularFireAuth.signOut();
  }
}
