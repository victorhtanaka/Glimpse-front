import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SidenavService } from 'src/app/services/sidenav.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-body-with-menu',
  templateUrl: './body-with-menu.component.html',
  styleUrls: ['./body-with-menu.component.scss']
})
export class BodyWithMenuComponent implements OnInit {
  @ViewChildren('sidenav') public sidenav: QueryList<MatSidenav>;
  
  constructor(
      private sidenavService: SidenavService,
      private spinnerService: SpinnerService,
      private authService: AuthService,
      public router: Router
    ) {}
  
    ngOnInit(): void {}
  
    isLoggedIn(): boolean {
      if (this.authService.loggedIn)
        return true;
      return false;
    }
  
    public ngAfterViewInit(): void {
      this.sidenavService.setSidenav(this.sidenav.first);
    }
  
    isVisible(): boolean {
      return this.spinnerService.isVisible();
    }
}
