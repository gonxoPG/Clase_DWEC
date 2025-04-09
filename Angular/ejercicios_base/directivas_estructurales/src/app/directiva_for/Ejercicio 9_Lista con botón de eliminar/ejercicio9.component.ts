import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio9',
  standalone: false,
  templateUrl: './ejercicio9.component.html',
  styleUrl: './ejercicio9.component.css'
})
export class Ejercicio9Component {
  tareas: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4', 'Tarea 5'];
  tareaSeleccionada: number = -1;

  seleccionarTarea(index: number) {
    this.tareaSeleccionada = this.tareaSeleccionada == index ? -1 : index;

  }

  eliminarTarea( /* _t4: producto */ ) {
    if (this.tareaSeleccionada != -1) {

      this.tareas.splice(this.tareaSeleccionada, 1);
      this.tareaSeleccionada = -1;
      
    }

    /* sugerencia Borja */
      //this.productos = this.productos.filter((producto) => producto !== _t4)
  }
}
