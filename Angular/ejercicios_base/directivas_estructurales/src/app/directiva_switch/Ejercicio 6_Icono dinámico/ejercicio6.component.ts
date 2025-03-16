import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio6',
  standalone: false,
  templateUrl: './ejercicio6.component.html',
  styleUrl: './ejercicio6.component.css'
})
export class Ejercicio6Component {
  tipoArchivo = "";
  iconoPDF = "assets/pdf.png";
  iconoDOC = "assets/doc.png";
  iconoIMG = "assets/img.png";

  // TODO: buscar iconos de iconduck.com y meterlos en public para luego coger la ruta
}
