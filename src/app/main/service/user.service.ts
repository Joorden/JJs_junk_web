import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {LoginService} from './login.service';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  email: String;

  private user_url = 'https://jjjunk.herokuapp.com/api/users';
  users = [];

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }
  registerUser(user): Observable<User> {
    const userJSON = JSON.stringify(user);
    const httpHeaders = new HttpHeaders({
      'Authorization' : this.loginService.authentication,
      'Content-Type': 'application/json'
    });

    const options = {
      headers: httpHeaders
    };
    return this.httpClient.post<User>(this.user_url, userJSON, options);
  }
  deleteUser() {
    const httpHeaders = new HttpHeaders({
      'Authorization' : this.loginService.authentication,
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.delete<User>(this.user_url, options);
  }
  editUser(user): Observable<User> {
    const userJSN = JSON.stringify(user);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.put<User>(this.user_url, userJSN, options);
  }
}
