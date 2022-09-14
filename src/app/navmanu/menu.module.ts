import { ViajensComponent } from './viajens/viajens.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    ViajensComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class MenuModule { }
