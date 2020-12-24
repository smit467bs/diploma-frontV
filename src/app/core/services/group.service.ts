import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { GroupRepository } from 'core/repositories';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class GroupService {
  route = 'groups';

  constructor(private http: HttpClient,
              private groupRepository: GroupRepository) {
  }

  createGroup(body: any) {
    return this.groupRepository.createGroup(body);
  }

  getGroupsPreview(): Observable<Array<any>> {
    return this.groupRepository.getGroupsPreview();
  }

  getGroupById(id: string): Observable<any> {
    return this.groupRepository.getGroupById(id);
  }

  inviteUser(id, body): Observable<any> {
    return this.groupRepository.inviteUser(id, body);
  }

  removeUserFrom(groupId, body): Observable<any> {
    return this.groupRepository.removeUserFrom(groupId, body);
  }

  addCurrentUserTo(groupId, body): Observable<any> {
    return this.groupRepository.addCurrentUserTo(groupId, body);
  }

  acceptUser(groupId, body): Observable<any> {
    return this.groupRepository.acceptUser(groupId, body);
  }

  acceptInvite(groupId: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.route}/${groupId}/acceptInvite`);
  }

  leaveGroup(groupId: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.route}/${groupId}/leaveGroup`);
  }
}
