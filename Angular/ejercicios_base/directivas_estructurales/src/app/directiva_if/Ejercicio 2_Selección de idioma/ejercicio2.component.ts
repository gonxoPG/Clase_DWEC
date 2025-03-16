import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: false,
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  edad = 0;
  formularioEnviado = false;

  evaluarEdad(edad: number) {
    return edad >= 18 ? 'Acceso permitido' : 'Acceso denegado';
  }

  getColor(){
    return this.edad >= 18 ? 'green' : 'red';
  }
}
