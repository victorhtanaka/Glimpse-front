import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MsalUserService } from 'src/app/services/msaluser.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(
    private sideNav: SidenavService,
    private authService: AuthService,
    private msalUserService: MsalUserService
  ) { }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

  toggleSidenav(){
    this.sideNav.toggle();
  }

  isLoggedIn(): boolean {
    if (this.authService.loggedIn) return true;
    return false;
  }

  logOut(){
    this.authService.logout();
  }

  logIn(){
    this.authService.updateLoggedInStatus();
  }

  hasProfilePicture() {
    return this.msalUserService.getHasProfilePicture();
  }

  getProfilePicture():any {
    return this.msalUserService.getProfilePicture();
  }

  getMsalUserName() {
    return this.msalUserService.getName();
  }

}
