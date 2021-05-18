import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://localhost:3000/posts';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Promise<Post[]> {
    return this.httpClient.get<Post[]>(this.url).toPromise();
  }
}
