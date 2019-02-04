import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from '../service/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  loginServiceVar = this.loginService;
  constructor(private loginService: LoginService ) { }

  ngOnInit() {
  }

}
