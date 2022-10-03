import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AfricadosulComponent } from './africadosul/africadosul.component';
import { MallawiComponent } from './mallawi/mallawi.component';
import { MarrocosComponent } from './marrocos/marrocos.component';
import { KenyaComponent } from './kenya/kenya.component';
import { ZambiaComponent } from './zambia/zambia.component';
import { ZimbabueComponent } from './zimbabue/zimbabue.component';
import { TanzaniaComponent } from './tanzania/tanzania.component';



@NgModule({
  declarations: [
    AfricadosulComponent,
    MallawiComponent,
    MarrocosComponent,
    KenyaComponent,
    ZambiaComponent,
    ZimbabueComponent,
    TanzaniaComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class AfricaModule { }
