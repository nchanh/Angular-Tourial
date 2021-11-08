import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { PostService } from './../post.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyn-search',
  templateUrl: './asyn-search.component.html',
  styleUrls: ['./asyn-search.component.css']
})
export class AsynSearchComponent implements OnInit {

  private searchedSubject = new Subject<string>()
  posts$: Observable<any>

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.posts$ = this.searchedSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(
        (searchString: string) => this.postService.searchPosts(searchString)
      )
    )
  }

  search(keyword: string) {
    this.searchedSubject.next(keyword)
  }
}
