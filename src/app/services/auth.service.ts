import { Inject, Injectable } from '@angular/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import {  AccountInfo, AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  private tokenRequest = { scopes: ['user.read'] };
  private readonly _destroying$ = new Subject<void>();

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) {}

  updateLoggedInStatus(): Observable<InteractionStatus> {
    return this.msalBroadcastService.inProgress$;
  }

  login() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.loginWithPopup();
    } else {
      this.loginWithRedirect();
    }
  }

  getActiveAccount(): AccountInfo | null {
    return this.authService.instance.getActiveAccount();
  }

  public checkAndSetActiveAccount() {
    let activeAccount = this.authService.instance.getActiveAccount();

    if (
      !activeAccount &&
      this.authService.instance.getAllAccounts().length > 0
    ) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  public setLoggedIn(): Observable<any> {
    this.loggedIn = this.authService.instance.getAllAccounts().length > 0;
    if (this.loggedIn) {
      return this.authService
        .acquireTokenSilent(this.tokenRequest)
        .pipe(catchError((err, caught) => this.handleError()));
    }
    return of();
  }

  private handleError(): Observable<AuthenticationResult> {
    this.loginWithRedirect();
    return this.authService.acquireTokenSilent(this.tokenRequest);
  }

  private loginWithPopup() {
    if (this.msalGuardConfig.authRequest) {
      this.authService
        .loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
        .subscribe((response: AuthenticationResult) => {
          this.authService.instance.setActiveAccount(response.account);
          this.setLoggedIn();
        });
    } else {
      this.authService
        .loginPopup()
        .subscribe((response: AuthenticationResult) => {
          this.authService.instance.setActiveAccount(response.account);
          this.setLoggedIn();
        });
    }
  }

  private loginWithRedirect() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({
        ...this.msalGuardConfig.authRequest,
      } as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }

  logout() {
    this.authService.logoutRedirect();
  }

  destroy() {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  getLoggedIn(): Observable<boolean> {
    return of(this.loggedIn);
  }
}
