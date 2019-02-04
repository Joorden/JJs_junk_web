import {Directive, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './service/login.service';

@Directive({
  selector: '[appProtected]'
})
export class ProtectedDirective {

  private sub: any = null;

  constructor(private loginService: LoginService, private router: Router) {
    if (!loginService.isLoggedIn()) {
      this.router.navigate([`/home`]);
    }
  }
}
