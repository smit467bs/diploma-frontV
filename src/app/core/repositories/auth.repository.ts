import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AuthRepository {
  constructor(private http: HttpClient) {
  }

  login(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, body);
  }

  register(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/register`, body);
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/auth/logout`);
  }

  refreshToken(token: string = null): Observable<any> {
    let headers = {};
    if (token) {
      headers = {
        'Authorization': 'Bearer ' + token,
      };
    }
    const options = {
      headers: new HttpHeaders(headers)
    };
    return this.http.get(`${environment.apiUrl}/auth/refreshToken`, options);
  }
}
