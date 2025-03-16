import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejercicio1Component } from './directiva_if/Ejercicio 1_Mostrar un mensaje según el estado del pedido/ejercicio1.component';
import { Ejercicio2Component } from './directiva_if/Ejercicio 2_Selección de idioma/ejercicio2.component';
import { Ejercicio3Component } from './directiva_if/Ejercicio 3_Icono dinámico/ejercicio3.component';
import { Ejercicio4Component } from './directiva_switch/Ejercicio 4_Mostrar un mensaje según el estado del pedido/ejercicio4.component';
import { Ejercicio5Component } from './directiva_switch/Ejercicio 5_Selección de idioma/ejercicio5.component';
import { Ejercicio6Component } from './directiva_switch/Ejercicio 6_Icono dinámico/ejercicio6.component';
import { Ejercicio7Component } from './directiva_for/Ejercicio 7_Listado de productos/ejercicio7.component';
import { Ejercicio8Component } from './directiva_for/Ejercicio 8_Numerar una lista/ejercicio8.component';
import { Ejercicio9Component } from './directiva_for/Ejercicio 9_Lista con botón de eliminar/ejercicio9.component';


@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component,
    Ejercicio6Component,
    Ejercicio7Component,
    Ejercicio8Component,
    Ejercicio9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
