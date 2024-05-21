import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationRequest } from 'src/app/services/models';
import { AuthenticationService } from 'src/app/services/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest: RegistrationRequest = {email:'', firstName:'', lastName:'', password:''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {

  }

  register(): void {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: ():void => {
        this.router.navigate(['activate-account']);
      },
      error: (err):void => {
        this.errorMsg = err.error.validationErrors;
      }
    })
  }

  login(): void {
    this.router.navigate(['login']);
  }
}
