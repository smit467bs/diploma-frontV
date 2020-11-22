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
    console.log({options});
    return this.http.get(`${environment.apiUrl}/auth/refreshToken`, options);
  }
}
