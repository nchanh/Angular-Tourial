import { PostService } from './../post.service';
import { PostEntityModel } from './../../models/post.entity.model';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPostById()
  }

  post: PostEntityModel

  getPostById(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.postService.getPost(id).subscribe(
      data =>  this.post = data,
      error => console.log(error.status)
    )
  }

  goBack(): void {
    this.location.back()
  }

  updatePost(): void {
    this.postService.updatePost(this.post).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }
}
