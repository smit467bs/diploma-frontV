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
    return this.http.get<Array<any>>(`${environment.apiUrl}/${this.route}/preview`);
  }

  getGroupById(id: string): Observable<any> {
    return this.http.get<Array<any>>(`${environment.apiUrl}/${this.route}/${id}`);
  }

  inviteUser(id: string, body): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.route}/${id}/invite`, body);
  }

  removeUserFrom(id: string, body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.route}/${id}/removeUserFrom`, body);
  }

  addCurrentUserTo(id, body): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/${this.route}/${id}/addUserTo`, body);
  }
}
