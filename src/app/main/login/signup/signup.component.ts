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
        fullName: this.fullName.nativeElement.value,
        email: this.email.nativeElement.value,
        postcode: this.postcode.nativeElement.value,
        homeNumber: this.streetnumber.nativeElement.value,
        password: this.password.nativeElement.value,
        admin: false}).subscribe();

  }

}
