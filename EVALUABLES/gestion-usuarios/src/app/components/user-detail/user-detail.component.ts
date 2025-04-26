import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

user: User | undefined = undefined;

  constructor( private router: ActivatedRoute, private dataservice: DataService, private apiservice: ApiService) {

    this.router.params.subscribe((params) => {
      let id = Number(params['id']);
      console.log(id);

      // cuando el usuario viene del servicio local
      this.user = this.dataservice.getUserById(id);

      // cuando el usuario viene del servicio API
      this.apiservice.getUserByIdURL(id).subscribe((user) => {
        this.user = user;
      });
    });
    
  }
}
