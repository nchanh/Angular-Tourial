import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie'
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.getMoviesFromService()
  }

  movies: Movie[] = []

  getMoviesFromService (): void {
    this.movieService.getMovies().subscribe( movies => this.movies = movies.slice(1, 5) )
  }

}
