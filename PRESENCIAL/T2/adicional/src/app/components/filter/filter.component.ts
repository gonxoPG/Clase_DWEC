import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  seleccionTag: string = '';
  posts: Post[] = [];

  constructor(private dataService: DataService) {}

  realizarFiltro() {
    console.log('Filtro seleccionado:', this.seleccionTag);

    this.dataService.getAllPostTagURL(this.seleccionTag).subscribe((data) => {
      this.posts = data.posts;
    });
  }
}
