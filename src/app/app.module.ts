import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component'
import { FormsModule } from '@angular/forms'
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { MovieService } from "./movie.service"
import { MessagesComponent } from './messages/messages.component'
import { MessageService } from './message.service'
import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http'
import { PostService } from './post.service'
import { PostComponent } from './post/post.component'
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostNewComponent } from './post-new/post-new.component';
import { EditTableComponentComponent } from './edit-table-component/edit-table-component.component';
import { AsynSearchComponent } from './asyn-search/asyn-search.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PostComponent,
    PostDetailComponent,
    PostNewComponent,
    EditTableComponentComponent,
    AsynSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    MessageService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
