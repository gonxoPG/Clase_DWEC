import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

  // importanción de un módulo que me interesa para traspasar información entre parte gráfica y lógica
  import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    AsignaturasComponent,
    TecnologiasComponent // aquí se ha agregado el componente para poder llamarlo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // aquí es donde realmente lo llamo
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
