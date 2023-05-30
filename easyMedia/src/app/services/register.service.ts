import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  createUser(user: User){
    return this.http.post(`${this.API_URI}/register`, user)
  }
}
