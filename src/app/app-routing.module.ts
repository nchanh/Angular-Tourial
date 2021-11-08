import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { MoviesComponent } from './movies/movies.component'
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { PostComponent } from './post/post.component'
import { PostDetailComponent } from './post-detail/post-detail.component'
import { PostNewComponent } from './post-new/post-new.component'
import { EditTableComponentComponent } from './edit-table-component/edit-table-component.component'
import { AsynSearchComponent } from './asyn-search/asyn-search.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'posts', component: PostComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'post-new', component: PostNewComponent },
  { path: 'edit-table', component: EditTableComponentComponent },
  { path: 'asyn-search', component: AsynSearchComponent }
]

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
