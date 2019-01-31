import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user_url = 'https://jjjunk.herokuapp.com/api/users';
  users = [];

  constructor(private httpClient: HttpClient) { }
  registerUser(user): Observable<User> {
    const userJSON = JSON.stringify(user);
    console.log(userJSON);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = {
      headers: httpHeaders
    };
    return this.httpClient.post<User>(this.user_url, userJSON, options);
  }
  getUsers() {
    return this.httpClient.get<User[]>(this.user_url);
  }
  getUser(Email) {
    return this.httpClient.get<User[]>(this.user_url + '/' + Email);
  }
  deleteUser(userEmail) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = {
      headers: httpHeaders
    };
    const new_url = `${this.user_url}/${userEmail}`;
    console.log(new_url);
    return this.httpClient.delete<User>(new_url, options);
  }
}
