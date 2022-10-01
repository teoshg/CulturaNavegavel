import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NaveganteComponent } from './navegante/navegante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    NaveganteComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MenuModule { }
