import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserInfo } from 'core/store/user/models';

@Injectable({providedIn: 'root'})
export class UsersRepository {
  route = 'users';

  constructor(private http: HttpClient) {
  }

  findUserByEmail(email: string): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${environment.apiUrl}/${this.route}/findByEmail`, {email});
  }
}
