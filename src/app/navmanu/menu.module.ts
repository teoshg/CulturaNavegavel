import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NaveganteComponent } from './navegante/navegante.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    HomeComponent,
    NaveganteComponent,
    ContactoComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class MenuModule { }
