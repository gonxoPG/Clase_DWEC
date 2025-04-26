import { Component } from '@angular/core';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  usuarios: User[] = [];
  usuariosApi: User[] = [];

  constructor(private usuarioService: DataService, private apiService: ApiService) { // importo el servicio
    this.usuarios = this.usuarioService.getUsers(); // igualo el array de usuarios al que me devuelve el servicio
    apiService.getAllUsers().subscribe((data) => {
      this.usuariosApi = data; // igualo el array de usuarios al que me devuelve el servicio
    })
  }

/*   obtenerDetalle(id: number) {
    console.log(this.apiService.getUserByIdURL(id).subscribe((data) => {
      console.log("Detalle del usuario: "+data.id); // imprimo el usuario que me devuelve el servicio
    }));
  }

  editarUsuario(id: number) {
    let usuario = this.apiService.getUserByIdURL(id).subscribe((data) => {
      console.log("Editando usuario "+data.id); // imprimo el usuario que me devuelve el servicio
    });
  } */
}
