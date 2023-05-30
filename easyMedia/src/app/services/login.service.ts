import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  login(login: any){
    return this.http.post(`${this.API_URI}/login`, login)
  }
  getUser(id: string){
    return this.http.get(`${this.API_URI}/login/${id}`)
  }

}
