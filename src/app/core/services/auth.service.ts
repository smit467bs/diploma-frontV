import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthRepository } from '../repositories';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private authRepository: AuthRepository) {
  }

  login(body: any): Observable<any> {
    return this.authRepository.login(body);
  }

  logout(): Observable<any> {
    return this.authRepository.logout();
  }

  refreshToken(token: string = null): Observable<any> {
    return this.authRepository.refreshToken(token);
  }
}
