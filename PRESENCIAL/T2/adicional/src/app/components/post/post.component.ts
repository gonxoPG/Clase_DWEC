import { Component, Input, input } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  //item: Post | undefined; // cambio la variable post por item para que funcionen las pruebas en el HTML
  @Input() post?: Post;
}
