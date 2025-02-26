import { Component } from '@angular/core';

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
}


/* export class AppComponent {
  title: string;
  asignatura: string;
  seleccion: string;
} */