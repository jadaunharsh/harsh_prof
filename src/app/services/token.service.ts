import { Injectable } from '@angular/core';
import { TokenData } from '../interfaces/token-data';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private TOKEN_KEY = 'accessToken';
  private REFRESH_TOKEN_KEY = 'refreshToken';
  private IS_LOGGED_IN = 'isLoggedIn'; // Default value for isLoggedIn

  constructor() { }

  // Set accessToken and refreshToken
  private setTokenKey(tokenData: TokenData): void {
    sessionStorage.setItem(this.TOKEN_KEY, tokenData.token);
    sessionStorage.setItem(this.REFRESH_TOKEN_KEY, tokenData.refreshToken);
  }

  // Remove accessToken and refreshToken
  removeTokenKey(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  // Retrieve refreshToken
  public getRefreshToken() {
    return sessionStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  private setIsLoggedIn(value: string) {
    sessionStorage.setItem(this.IS_LOGGED_IN, value);
  }
  // Retrieve refreshToken
  public getIsLoggedIn() {
    return sessionStorage.getItem(this.IS_LOGGED_IN);
  }
  // Remove refreshToken
  public removeIsLoggedIn() {
    sessionStorage.removeItem(this.IS_LOGGED_IN);
  }



  public removeAll() {
    this.removeTokenKey();
    this.removeIsLoggedIn();
  }

  public setTokenServiceValues(name: string, value: any) {
    debugger;
    switch (name) {
      case 'tokenKey':
        this.setTokenKey(value as TokenData);
        break;
      case 'isLoggedIn':
        this.setIsLoggedIn(value as string);
        break;
    }
  }


}

export enum TokenServiceNames {
  TokenKey = 'tokenKey',
  IsLoggedIn = 'isLoggedIn'
}
