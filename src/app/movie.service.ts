import { Injectable } from '@angular/core'
import { fakeMovies } from "./fake-movie"
import { Movie } from "../models/movie"

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { MessageService } from './message.service'

@Injectable()
export class MovieService {

  constructor(
    public messageService: MessageService
  ) { }

  getMovies(): Observable<Movie[]> {
    this.messageService.addMessage(`${new Date().toLocaleString()}. Get movie list`)
    return of(fakeMovies)
  }
  getMovieById(id: number): Observable<Movie> {
    return of(fakeMovies.find( movie => movie.id === id ))
  }
}
