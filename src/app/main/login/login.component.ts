import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  email: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  onLoginClicked() {
    this.password = (<HTMLInputElement>document.getElementById('password')).value;
    this.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.loginService.authenticate(this.email, this.password).subscribe(user => this.loginService.login(user));
    console.log(this.email , this.password);
  }

}
