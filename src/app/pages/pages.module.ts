import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'


//Modulos
import { SharedModule } from '../shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';


import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],

  exports: [
    HomeComponent,
    PagesComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule
  ]
})
export class PagesModule { }
