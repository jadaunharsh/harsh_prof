import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from './login.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  return inject(LoginService).canActivate();
};
