import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NordesteComponent } from './nordeste/nordeste.component';
import { CentroOesteComponent } from './centro-oeste/centro-oeste.component';
import { SuldesteComponent } from './suldeste/suldeste.component';
import { SulComponent } from './sul/sul.component';



@NgModule({
  declarations: [
    NordesteComponent,
    CentroOesteComponent,
    SuldesteComponent,
    SulComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class BrasilModule { }
