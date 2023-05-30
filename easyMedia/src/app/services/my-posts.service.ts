import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyPostsService {

 
  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getMyPost(id: string){
    return this.http.get(`${this.API_URI}/my-posts/${id}`)
  }
}
