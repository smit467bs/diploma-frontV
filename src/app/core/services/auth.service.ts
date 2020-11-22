import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthRepository } from '../repositories';
import { AuthResponse } from 'core/models/responce';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private authRepository: AuthRepository) {
  }

  login(body: any): Observable<AuthResponse> {
    return this.authRepository.login(body);
  }

  logout(): Observable<any> {
    return this.authRepository.logout();
  }

  refreshToken(token: string = null): Observable<AuthResponse> {
    return this.authRepository.refreshToken(token);
  }
}
