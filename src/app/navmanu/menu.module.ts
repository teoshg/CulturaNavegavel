import { ViajensComponent } from './viajens/viajens.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    ViajensComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
