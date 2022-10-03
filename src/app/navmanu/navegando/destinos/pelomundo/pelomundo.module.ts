import { EuropaModule } from './europa/europa.module';
import { AmericasModule } from './americas/americas.module';
import { AfricaModule } from './africa/africa.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AfricaComponent } from './africa/africa.component';
import { AmericasComponent } from './americas/americas.component';
import { EuropaComponent } from './europa/europa.component';



@NgModule({
  declarations: [
    AfricaComponent,
    AmericasComponent,
    EuropaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AfricaModule,
    AmericasModule,
    EuropaModule,
    
  ]
})
export class PelomundoModule { }
