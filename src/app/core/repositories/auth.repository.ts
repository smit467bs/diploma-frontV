import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthResponse } from 'core/models/responce';

@Injectable({providedIn: 'root'})
export class AuthRepository {
  constructor(private http: HttpClient) {
  }

  login(body: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, body);
  }

  register(body: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/register`, body);
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/auth/logout`);
  }

  refreshToken(token: string = null): Observable<AuthResponse> {
    let headers = {};
    if (token) {
      headers = {
        'Authorization': 'Bearer ' + token,
      };
    }
    const options = {
      headers: new HttpHeaders(headers)
    };
    return this.http.get<AuthResponse>(`${environment.apiUrl}/auth/refreshToken`, options);
  }
}
