import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.auth.signOut()
      .then(r => {
        console.log("Logged Out successfully!");
      });
  }

}
