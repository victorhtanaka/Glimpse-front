import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {

  constructor(private authService: AuthService,) { }

  ngOnInit(): void {
  }

  shouldHideMenu(menu: string): boolean{
    return false;
  }

  isLoggedIn(): boolean {
    if (this.authService.loggedIn)
      return true;
    return false;
  }

}
