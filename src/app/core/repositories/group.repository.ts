import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class GroupRepository {
  route = 'groups';

  constructor(private http: HttpClient) {
  }

  createGroup(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.route}`, body);
  }

  getGroupsPreview(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.apiUrl}/${this.route}`);
  }
}