import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UruguaiComponent } from './uruguai/uruguai.component';
import { UmdiauruguaiComponent } from './uruguai/umdiauruguai/umdiauruguai.component';



@NgModule({
  declarations: [
    UruguaiComponent,
    UmdiauruguaiComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AmericasModule { }
