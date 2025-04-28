import { Component } from '@angular/core';
import { Post } from '../../model/post';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})


export class DetailComponent {
  post: Post | undefined = undefined;
  
  constructor(private router: ActivatedRoute, private dataservice: DataService) {
    
    this.router.params.subscribe((params) => {
      /* this.post = this.dataservice.getPostById(params['id']); */
      this.dataservice.getPostByIdURL(params['id']).subscribe((data) => {
        this.post = data;
      });
    });
  }
}
