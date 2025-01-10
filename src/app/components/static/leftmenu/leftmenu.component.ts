import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  isCollapsed = true;
  currentUser = new User();
  adminList = ['Administrador Contabilidade', 'Administrador']

  constructor(private sidenavService: SidenavService,
    private authService: AuthService
  ) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    })
  }

  ngOnInit(): void {
    this.sidenavService.isCollapsed$.subscribe((isCollapsed) => {
      this.isCollapsed = isCollapsed;
    });
  }
}
