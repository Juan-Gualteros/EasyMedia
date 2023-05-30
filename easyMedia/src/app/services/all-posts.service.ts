import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllPostsService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get(`${this.API_URI}/all-posts/`)
  }

}

