import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from '../inicio/inicio.component';
import { PieComponent } from 'src/pie/pie.component';
import { CabeceraComponent } from 'src/cabecera/cabecera.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { ModalComponent } from './modal/modal.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { HerramientasComponent } from './herramientas/herramientas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabeceraComponent,
    PieComponent,
    TrabajosComponent,
    ModalComponent,
    ProgresoComponent,
    EmpleoComponent,
    HerramientasComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
