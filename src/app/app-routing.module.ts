import { UmdiauruguaiComponent } from './navmanu/navegando/destinos/pelomundo/americas/uruguai/umdiauruguai/umdiauruguai.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapaInterativoComponent } from './navmanu/mapa-interativo/mapa-interativo.component';
import { AmericasComponent } from './navmanu/navegando/destinos/pelomundo/americas/americas.component';
import { PelomundoComponent } from './navmanu/navegando/destinos/pelomundo/pelomundo.component';
import { DestinosComponent } from './navmanu/navegando/destinos/destinos.component';
import { NavegandoComponent } from './navmanu/navegando/navegando.component';
import { ContactComponent } from './navmanu/contact/contact.component';
import { HomeComponent } from './navmanu/home/home.component';
import { NaveganteComponent } from './navmanu/navegante/navegante.component';
import { ProdutosComponent } from './navmanu/produtos/produtos.component';
import { UruguaiComponent } from './navmanu/navegando/destinos/pelomundo/americas/uruguai/uruguai.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'sobre', component: NaveganteComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'mapa', component: MapaInterativoComponent },

  { path: 'navegando', component: NavegandoComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: 'pelomundo', component: PelomundoComponent },
  
  { path: 'americas', component: AmericasComponent },
  { path: 'uruguai', component: UruguaiComponent },
  { path: 'umdiauruguai', component: UmdiauruguaiComponent },
  

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
