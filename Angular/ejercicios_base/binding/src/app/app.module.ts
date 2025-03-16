import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './components/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './components/ejercicio3/ejercicio3.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component
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
