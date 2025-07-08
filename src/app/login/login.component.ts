import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { GoogleLoginProvider, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private loginService: LoginService, private router: Router) {

  }

  onSubmit() {
    debugger;
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm.value);
    }
    this.loginForm.reset();
  }

  register() {
    localStorage.clear(); // Clear all local storage items
    localStorage.setItem('registerUser', 'true'); // Set registerUser flag in local storage
    this.router.navigate(['/register']); // Navigate to register page
  }

  externalLogin = () => {
    debugger;
    // this.loginService.signInWithGoogle();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
