import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-create',
  standalone: false,
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {
  id: number = 0;
  nombre: string = '';
  usuario: string = '';
  email: string = '';
  telefono: string = '';
  website: string = '';

  constructor(private servicio: DataService) {}

  addUser() {
    let usuario = {
      id: this.id,
      name: this.nombre,
      username: this.usuario,
      email: this.email,
      phone: this.telefono,
      website: this.website,
    };

    // acceder al servicio y agregar el usuario
    this.servicio.addUser(usuario);

    // limpiar los campos
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.id = 0;
    this.nombre = '';
    this.usuario = '';
    this.email = '';
    this.telefono = '';
    this.website = '';
  }
}
