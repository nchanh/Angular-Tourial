import { Component, OnInit, SecurityContext } from '@angular/core'

import { Movie } from '../../models/movie'
import { MovieService } from "../movie.service"
import { PostService } from './../post.service'
import { PostEntityModel } from '../../models/post.entity.model'

import { fakeMovies } from '../fake-movie'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private postService: PostService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getMoviesFromService()
  }

  movie: Movie = {
    id: 1,
    name: 'Ava',
    release_year: 2021
  }

  movies: Movie[]
  posts: PostEntityModel[]
  getMoviesFromService(): void {
    this.movieService.getMovies().subscribe( updateMovies => this.movies = updateMovies )
    this.postService.getPostsTop4().subscribe(
      data => this.posts = data,
      error => console.log('error status', error.status)
    )
  }

  // toHTML(input) : any {
  //   return this.sanitizer.sanitize(SecurityContext.HTML, input)
  // }

  // selectedMovie: Movie
  // onSelect(movie: Movie): void {
  //   this.selectedMovie = movie
  //   console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`)
  // }

}
