import { DestinoModule } from './destinos/destino.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinosComponent } from './destinos/destinos.component';
import { DicasComponent } from './dicas/dicas.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { PoesiasComponent } from './poesias/poesias.component';
import { TurismocannabicoComponent } from './turismocannabico/turismocannabico.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DestinosComponent,
    DicasComponent,
    ExperienciasComponent,
    PoesiasComponent,
    TurismocannabicoComponent
  ],
  imports: [
    CommonModule,
    DestinoModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class NavegandoModule { }
