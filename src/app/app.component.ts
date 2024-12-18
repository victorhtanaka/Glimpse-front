import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { MsalUserService } from 'src/app/services/msaluser.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly _destroying$ = new Subject<void>();
  title = 'GlimpseWebTemplate';

  constructor(
    private msalService: MsalService,
    private authService: AuthService,
    private msalUserService: MsalUserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    if (!this.authService.loggedIn) {
      this.login();
    }
  }

  login() {
    this.authService
      .updateLoggedInStatus()
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((status) => {
        this.authService.checkAndSetActiveAccount();
        this.authService.setLoggedIn().subscribe((response) => {
          let accountInfo = this.msalService.instance.getAllAccounts()[0];
          this.msalUserService.setUserProfileData(response, accountInfo);
          this.msalUserService
            .getProfilePicturefromGraph()
            .subscribe((image) => {
              if (image) {
                this.msalUserService.setProfilePicture(image);
              }
              /* this.loginService
                .getToken(this.msalUserService.preferredUsername.toLowerCase())
                .subscribe((result) => {
                  if (result) {
                    if (result.success) {
                      this.loginService.setToken(result);
                      if (this.isUserAuthorized('CashFlow')) {
                        this.getAllBankAccounts();
                        this.getAllCategories();
                        this.getAllOperations();
                      } else {
                        this.router.navigate(['/unauthorized']);
                      }
                    } else {
                      this.router.navigate(['/login']);
                    }
                  }
                }); */
            });
        });
      });
  }

  ngOnDestroy() {
    this.destroy();
  }

  destroy() {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
