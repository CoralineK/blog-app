import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LatestPostListComponent } from './latest-post-list/latest-post-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    resolve: {},
    component: HomepageComponent,
  },
];

@NgModule({
  declarations: [LatestPostListComponent, HomepageComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
