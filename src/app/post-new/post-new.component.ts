import { PostService } from './../post.service';
import { PostEntityModel } from './../../models/post.entity.model'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms'

export function selectedOption(dataInput: AbstractControl) {
  return (dataInput.value === 'Choose...') ? { invalidusername: true } : null
}

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {

  rfPost: FormGroup
  searchControl = new FormControl()

  constructor(
    private postService: PostService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.rfPost = this.formBuilder.group({
      title: ['', [Validators.required, Validators.max(190)]],
      short_description: ['', Validators.required],
      thumbnail: ['', Validators.required],
      content: ['', Validators.required],
      status: '0',
      category_id: ['Choose...', selectedOption],
    })
    this.formSearch()
  }

  onSubmit() {
    console.log(this.rfPost.value);

    this.postService.addPost(this.rfPost.value).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/posts'])
      },
      error => console.log(error)
    )
  }

  formSearch() {
    this.searchControl.valueChanges.subscribe(value => {
      // do search with value here
      console.log(value);
    });
  }
}
