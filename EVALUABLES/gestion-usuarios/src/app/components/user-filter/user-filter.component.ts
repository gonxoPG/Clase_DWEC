import { Component } from '@angular/core';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-filter',
  standalone: false,
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.css'
})
export class UserFilterComponent {

  seleccionEmail: string = '.biz';
  user: User | undefined = undefined;
  users: User[] = [];

  constructor(private dataservice: DataService, private apiservice: ApiService){ }

  realizarFiltro(){

    // usuarios locales
    const localUsers = this.dataservice.getAllUsersByEmail(this.seleccionEmail);

    //usuarios de la API
    this.apiservice.getAllUsersByEmail(this.seleccionEmail)?.subscribe((response) => {
      this.users = [...localUsers, ...response];

    });
    }
}
