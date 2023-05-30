import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }
 

  create(body:any){
    return this.http.post(`${this.API_URI}/create-post/`, body)
  }
}
