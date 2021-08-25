import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  logIn() {
    const {email, password} = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log("Logged in user -> logIn -> user ", user);
        this.router.navigate([''])
      })
  }

}
