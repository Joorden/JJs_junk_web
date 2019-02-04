import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isedit = 0;

  constructor(private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
  }
  addUser(form: NgForm) {
    this.userService.registerUser({
      email: form.value.email,
      password: form.value.password,
      admin: true
    }).subscribe();
  }
  updateUser(form: NgForm) {
    this.userService.editUser({
      email: this.loginService.email,
      password: form.value.password,
      admin: true
    }).subscribe();
    this.loginService.logout();
  }
  delete() {
    this.userService.deleteUser().subscribe();
    this.loginService.logout();
  }
}
