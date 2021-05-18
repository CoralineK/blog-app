import { Component, Input } from '@angular/core';
import { Post } from '../types';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
  @Input() public post: Post;
}
