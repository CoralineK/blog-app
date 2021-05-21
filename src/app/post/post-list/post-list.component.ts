import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts = this.activatedRoute.snapshot.data.posts;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
