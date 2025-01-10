import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MsalUserService } from 'src/app/services/msaluser.service';
import { SidenavService } from 'src/app/services/sidenav.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isQaEnviroment: boolean = !environment.production;

  constructor(
    private sideNav: SidenavService,
    private authService: AuthService,
    private msalUserService: MsalUserService,
    private router: Router
  ) {}

  toggleSidenav() {
    this.sideNav.toggleCollapse();
  }  

  isLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  logIn() {
    this.authService.updateLoggedInStatus();
  }

  logOut() {
    this.authService.logout();
  }

  hasProfilePicture() {
    return this.msalUserService.getHasProfilePicture();
  }

  getProfilePicture(): any {
    return this.msalUserService.getProfilePicture();
  }

  getMsalUserName() {
    return this.msalUserService.getName();
  }

  routeHome() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
