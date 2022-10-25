import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
//import { AuthService } from '../../auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styles: [
  ]
})
export class LoginScreenComponent implements OnInit {

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
  }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

}
