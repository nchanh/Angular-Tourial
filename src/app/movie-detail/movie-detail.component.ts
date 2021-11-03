import { Component, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";

import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getMovieFromRoute()
  }

  movie: Movie

  getMovieFromRoute(): void {
  const id = +this.route.snapshot.paramMap.get('id')
    this.movieService.getMovieById(id).subscribe( movie => this.movie = movie)
  }
  goBack(): void {
    this.location.back()
  }
}
