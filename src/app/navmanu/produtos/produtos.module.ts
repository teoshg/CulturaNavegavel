import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosComponent } from './livros/livros.component';
import { RoteirosComponent } from './roteiros/roteiros.component';
import { PhotografiasComponent } from './photografias/photografias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LivrosComponent,
    RoteirosComponent,
    PhotografiasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProdutosModule { }
