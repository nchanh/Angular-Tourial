import { Injectable } from '@angular/core'

import { PostEntityModel } from './../models/post.entity.model'
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from './../environments/environment';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  private API_URL= environment.apiUrl;

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2YwYzIxMGFiYmU5YWU5YzNlMDdiY2ZiZjRkNDg1ZjA0NzAwYzkxYWM1Y2I5YzAwODAyOGRkMjFlMmM2ZjU1MTA3MDY1ZjA2NTYyMjAwZDEiLCJpYXQiOjE2MzU3NTE2MjIuMTA4MjUzLCJuYmYiOjE2MzU3NTE2MjIuMTA4MjU4LCJleHAiOjE2NjcyODc2MjIuMDEyNzMxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BQmzEE9FoSplp63Jss80h-3EGyi37cd9AVGzs4QwqFEUjIgIuVQ72lpOkU1F9Vz3JjUT8MyT5BK0tYQamMmEdUr4hRIxYVF6hyFmkMVg86wSRZdd_g1FifJ4o9i8b5bGjQTDb29d7Q1cFsEOMRzo4mrItstsQNYzYDcIJyUGdpUSvqeNuG78B7nu85wsys8J8J1_KG06uirKNZVm0QFdPj0D4HjX1BFYqHXSOtmeK_e5TE_VxSDzBd36fYnqaKlSHToJv0VHk5Q5pZOX4lgI7YzRdxgCNQ0hLxYvG5JaJtxlc5wC0NFS6vF0pqY5PJG5DZctQJjpw9bPhvUzgUya1vByzPNpvq2T95PzUu_AQCvstTFdFAIeWH7Q2OOEiHSrbHRrO7m3Tp6qW4t4mOL21ahfHUJ99Hm6Vj30G15u-dlZe9WGUI3y7MqRlzog1yOwvWT88CWTSRueiUUa6I6LpsvSnkSXeb3UVjPVxCPnA1EGa3E63TzMZ3R7ryi74ANLwr1LgeNDvU3anJKlCP4R8ea5sJRtXMfCImfxx1AMrozFT2TkM6wIZ1h5bTMyDcp-XtcHlkHlqPEASdS0iM19CzjAo6AWSjFdCXn9LmUga5Vmeva3mcRZtqab9ZCUaxeOAPSbFrxM0Tl9UiYFuDGFN83qtMa8eQfTPMAqkw5fcB8'
    })
  }

  getPostsTop4(): Observable<PostEntityModel[]> {
    return this.http.get<PostEntityModel[]>(`${this.API_URL}/post/get/top-4-views`)
  }

  getAllPosts(): Observable<PostEntityModel[]> {
    return this.http.get<PostEntityModel[]>(`${this.API_URL}/posts`)
  }

  getPost(id: number): Observable<PostEntityModel> {
    return this.http.get<PostEntityModel>(`${this.API_URL}/posts/${id}`)
  }

  updatePost(post: PostEntityModel): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/posts/${post.id}`, post, this.header)
  }

  addPost(post: PostEntityModel): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/posts`, post, this.header)
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/posts/${postId}`, this.header)
  }

  searchPosts(keyword: string): Observable<PostEntityModel[]> {
    if (!keyword.trim()) {
      return of([])
    }
    return this.http.get<PostEntityModel[]>(`${this.API_URL}/post/search-all/${keyword}`)
  }
}
