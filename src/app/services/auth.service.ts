import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getPost(){
   return this.http.get('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts');
  }

  isLogedIn(){
   return !!localStorage.getItem('login')
  }

}
