import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/services/models';
import { AuthenticationService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService

  ){}

  login(): void {
    this.errorMsg = []; // Clear any previous error messages
    this.authService.authenticate({ body: this.authRequest }) // Call the authService's authenticate method
      .subscribe({
        next: (res): void => { // Success callback
          this.tokenService.token = res.token as string
          // Navigate to the 'books' route upon successful authentication
          this.router.navigate(['books']);
        },
        error: (err): void => { // Error callback
          console.log(err); // Log the error to the console
          if (err.error.validationErrors) { // Check if there are validation errors
            this.errorMsg = err.error.validationErrors; // Set the error messages to the validation errors
          } else {
            this.errorMsg.push(err.error.error); // Set the error message to the error received from the server
          }
        }
      });
  }
  

  register():void{
    // Navigate to the 'register' route
    this.router.navigate(['register'])
  }

}
