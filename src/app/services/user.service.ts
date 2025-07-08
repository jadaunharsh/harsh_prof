import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';
import { Observable } from 'rxjs';
import { TokenService, TokenServiceNames } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpUrl = 'https://localhost:7073/api/Users'; // API URL Development


  constructor(private http: HttpClient, private helperService: HelperService, private tokenService: TokenService) { }
  registerUser(registerData: any): void {
    var registerUserResult = this.http.post<any>(this.httpUrl + "/Register", registerData);
    registerUserResult.subscribe({
      next: (data) => {
        if (data) {
          this.tokenService.setTokenServiceValues(TokenServiceNames.IsLoggedIn, 'true'); // Set login state
          this.helperService.showSuccess("User registered successfully");
        }
      },
      error: (error) => {
        console.error("User registration failed", error);
        this.helperService.showError(error.error); // Show error message
      }
    });
  }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(this.httpUrl + "/GetProfile");
  }
}
