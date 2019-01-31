import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userURL = 'https://jjjunk.herokuapp.com/api/';
  currentUser: User = null;
  authentication: string;
  email: string;

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }

  authenticate(username: string, password: string) {
    const newUrl = `${this.userURL}/me`;
    this.authentication = 'Basic ' + btoa(username + ':' + password);
    const httpHeaders = new HttpHeaders({
      'Authorization': this.authentication
    });
    const options = {
      headers: httpHeaders
    };

    return this.httpClient.get<User>(newUrl, options);
  }
  login(user: User) {
    this.currentUser = user;
    this.router.navigate([`/home`], {relativeTo: this.route});
  }

  logout() {
    this.currentUser = null;
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }
}
