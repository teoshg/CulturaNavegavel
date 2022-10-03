import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UruguaiComponent } from './uruguai/uruguai.component';



@NgModule({
  declarations: [
    UruguaiComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AmericasModule { }
