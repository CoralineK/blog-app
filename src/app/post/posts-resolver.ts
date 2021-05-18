import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Post } from './types';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<Post[]> {
  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Post[]> {
    return this.postService.getPosts();
  }
}
