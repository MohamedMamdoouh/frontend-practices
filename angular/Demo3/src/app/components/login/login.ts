import { UserAuth } from './../../services/user-auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(private userAuth: UserAuth) {}

  ngOnInit(): void {
    this.userAuth.getAuthSubject().subscribe((isLoggedIn) => {
      this.isUserLoggedIn = isLoggedIn;
    });
  }

  login() {
    this.userAuth.login();
  }

  logout() {
    this.userAuth.logout();
  }
}
