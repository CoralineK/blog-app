import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PostItemComponent } from './post-item/post-item.component';
import { PostResolver } from './posts-resolver';
import { PostContentComponent } from './post-content/post-content.component';

const routes: Routes = [
  {
    path: 'posts',
    resolve: { posts: PostResolver },
    component: PostListComponent,
  },
  {
    path: 'posts/:id',
    component: PostContentComponent,
  },
];

@NgModule({
  declarations: [PostListComponent, PostItemComponent, PostContentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [PostListComponent],
})
export class PostModule {}
