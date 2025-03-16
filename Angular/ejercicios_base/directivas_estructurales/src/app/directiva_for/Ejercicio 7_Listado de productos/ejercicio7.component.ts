import { Component } from '@angular/core';
import { Ingrediente } from '../../model/modelos';

@Component({
  selector: 'app-ejercicio7',
  standalone: false,
  templateUrl: './ejercicio7.component.html',
  styleUrl: './ejercicio7.component.css'
})
export class Ejercicio7Component {
  productos: Ingrediente[] = [];
  nombre: string = "";
  precio: number = 0;
  tipo: string = "";

  guardarProducto() {
    
    let ingrediente: Ingrediente = {nombre:this.nombre, precio:this.precio, tipo:this.tipo};
    this.productos.push(ingrediente);

    this.nombre = "";
    this.precio = 0;
    this.tipo = "";
  }

  /* para poder new Ingrediente, éste debería ser una class con constructor, no una interfaz */
    /* las dos opciones crean un cliente, pero esta lo crea de forma sencilla (solo estructura) y el otro de forma más compleja (puede tener parte lógica dentro) */
}
