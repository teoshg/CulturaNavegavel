import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './navmanu/home/home.component';
import { NaveganteComponent } from './navmanu/navegante/navegante.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navegante', component: NaveganteComponent },
  { path: 'contacto', component: ContactoComponent },
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
