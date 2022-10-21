import { BrasilModule } from './brasil/brasil.module';
import { PelomundoModule } from './pelomundo/pelomundo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PelomundoComponent } from './pelomundo/pelomundo.component';
import { BrasilComponent } from './brasil/brasil.component';



@NgModule({
  declarations: [
    PelomundoComponent,
    BrasilComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PelomundoModule,
    BrasilModule,
    FormsModule,
    
  ]
})
export class DestinoModule { }
