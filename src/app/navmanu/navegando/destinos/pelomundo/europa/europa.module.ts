import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PortugalComponent } from './portugal/portugal.component';
import { EspanhaComponent } from './espanha/espanha.component';
import { FrancaComponent } from './franca/franca.component';
import { AlemanhaComponent } from './alemanha/alemanha.component';
import { ItaliaComponent } from './italia/italia.component';
import { EsloveniaComponent } from './eslovenia/eslovenia.component';
import { CroaciaComponent } from './croacia/croacia.component';
import { BosniaComponent } from './bosnia/bosnia.component';
import { ServiaComponent } from './servia/servia.component';
import { MontenegroComponent } from './montenegro/montenegro.component';
import { AustriaComponent } from './austria/austria.component';
import { UngriaComponent } from './ungria/ungria.component';
import { SlovaquiaComponent } from './slovaquia/slovaquia.component';
import { RepublicaChecaComponent } from './republica-checa/republica-checa.component';
import { HolandaComponent } from './holanda/holanda.component';



@NgModule({
  declarations: [
    PortugalComponent,
    EspanhaComponent,
    FrancaComponent,
    AlemanhaComponent,
    ItaliaComponent,
    EsloveniaComponent,
    CroaciaComponent,
    BosniaComponent,
    ServiaComponent,
    MontenegroComponent,
    AustriaComponent,
    UngriaComponent,
    SlovaquiaComponent,
    RepublicaChecaComponent,
    HolandaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EuropaModule { }
