import { ProdutosModule } from './produtos/produtos.module';
import { NavegandoModule } from './navegando/navegando.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NaveganteComponent } from './navegante/navegante.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavegandoComponent } from './navegando/navegando.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MapaInterativoComponent } from './mapa-interativo/mapa-interativo.component';




@NgModule({
  declarations: [
    HomeComponent,
    NaveganteComponent,
    ContactComponent,
    NavegandoComponent,
    ProdutosComponent,
    MapaInterativoComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NavegandoModule,
    ProdutosModule,
    
  ]
})
export class MenuModule { }
