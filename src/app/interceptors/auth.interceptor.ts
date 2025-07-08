import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  tokenData: any;
  constructor(private tokenService: TokenService) {

  }
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.tokenService.getToken();
    const isLoggedIn = this.tokenService.getIsLoggedIn() === 'true';
    // const refreshToken = this.tokenData.RefreshToken;

    if (isLoggedIn && token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }
    console.log('Request URL: ' + req.url);
    return handler.handle(req);
  }

}