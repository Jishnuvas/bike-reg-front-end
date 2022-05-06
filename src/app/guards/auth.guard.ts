import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Auth0Service } from '../services/auth0.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: Auth0Service) {}
  canActivate() {
    if (this.authService.isAuthenticated()) {
      console.log('Authenticated');
      return true;
    } else {
      console.log('Not authenticated');
      this.authService.login();
      return false;
    }
  }
}
