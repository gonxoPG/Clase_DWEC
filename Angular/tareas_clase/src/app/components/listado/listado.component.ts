import { Component } from '@angular/core';
import { Conocimiento } from '../../model/modelos'; // al crear el objeto Conocimiento, se importa la interfaz Conocimiento
import Swal from 'sweetalert2';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-listado', // aquí está el selector del componente
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  nombre = 'Gonzalo Pastor';
  url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  nombreConocimiento = '';
  nivelConocimiento = '';
  conocimientos: Conocimiento[] = [];
  mostrar = false;

  guardarElemento() {

    if (this.nombreConocimiento.length == 0 && this.nivelConocimiento.length == 0) {
      /* alert('Debes rellenar los campos'); */ // vamos a hacerlo con SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes rellenar los campos',
      });

    } else {

      let conocimiento: Conocimiento = {
        nombre: this.nombreConocimiento,
        nivel: this.nivelConocimiento
      };
      // creación del objeto, funciona como un JSON

      this.conocimientos.push(conocimiento); // cada vez que pulso el botón, se añade un conocimiento al array

      this.vaciarDatos();
    }

  }

  mostrarConocimientos() {
      this.mostrar = !this.mostrar;
  }

  vaciarDatos() {
    this.nombreConocimiento = '';
    this.nivelConocimiento = '';
  }
}
