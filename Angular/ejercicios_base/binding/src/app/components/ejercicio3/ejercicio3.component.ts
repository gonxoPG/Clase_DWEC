import { Component } from '@angular/core';
import { log } from 'console';


@Component({
  selector: 'app-ejercicio3',
  standalone: false,
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  opcionSeleccionada = "";

  cambioOpcion() {
    console.log("El valor es "+this.opcionSeleccionada);
    console.log(typeof this.opcionSeleccionada);
  }

}
