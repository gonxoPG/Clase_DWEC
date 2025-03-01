import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gonzalo Pastor';
  asignatura = 'Desarrollo de aplicaciones web';
  seleccion = '1'; // se reasigna con el ngModel

  constructor(private router: Router) {
    
  }

  navegar() { // es lo mismo que hacíamos con routerLink pero con procesamiento de datos (cuando haga falta)
    console.log("Navegando a listado");
    this.router.navigate(["/listado", 3]); // he modificado la rutas para que requiera un :id
    /* this.router.navigate(["/listado", this.seleccion]); */
  }

}


/* export class AppComponent {
  title: string;
  asignatura: string;
  seleccion: string;
} */