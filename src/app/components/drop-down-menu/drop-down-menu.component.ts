import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.css']
})
export class DropDownMenuComponent implements OnInit {
  isCollapsed = true;
  faUser = faUser;
  faPowerOff = faPowerOff;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
