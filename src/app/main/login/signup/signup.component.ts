import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('fullName') fullName: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('postcode') postcode: ElementRef;
  @ViewChild('streetnumber') streetnumber: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('role') role: ElementRef;

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }
  signup() {
    this.userservice.registerUser(
      {
        email: this.email.nativeElement.value,
        fullName: this.fullName.nativeElement.value,
        password: this.password.nativeElement.value,
        postcode: this.postcode.nativeElement.value,
        homeNumber: this.streetnumber.nativeElement.value,
        admin: false}).subscribe();

  }

}
