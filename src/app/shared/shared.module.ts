import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookContentComponent } from './bookContent/book-content.component';

import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { ModalFormBookComponent } from './modals/modal-form-book.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BookContentComponent,
    ModalFormBookComponent,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BookContentComponent,
    MatCardModule,
    MatDividerModule,
    ModalFormBookComponent,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
