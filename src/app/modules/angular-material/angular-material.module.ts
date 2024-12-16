import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

const angularModule = [
  BrowserAnimationsModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatMenuModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    angularModule
  ],
  exports: [
    angularModule
  ]
})
export class AngularMaterialModule { }
