import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core'

import { PostEntityModel } from './../../models/post.entity.model';
import { PostService } from './../post.service'
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: PostEntityModel
  posts: PostEntityModel[]
  posts$: Observable<PostEntityModel[]>

  private searchedString = new Subject<String>()
  statusSearch = false

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(
      data => this.posts = data,
      error => console.log(error)
    )
  }

  delete(id: number) {
    if(window.confirm('Are sure you want to delete this item ?')){
      this.postService.deletePost(id).subscribe(
        data => this.posts = this.posts.filter( post => post.id !== id),
        error => console.log(error)
      )
    }
  }

  search(search: string) {
    if (search.trim()) {
      this.statusSearch = true
    } else {
      this.statusSearch = false
    }
    this.searchedString.next(search)
  }

  searchPosts(keyword) {
    this.posts$ = this.searchedString.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap( ( searchString: string ) => this.postService.searchPosts(keyword) )
    )
  }

}
