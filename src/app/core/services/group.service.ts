import { Injectable } from '@angular/core';
import { GroupRepository } from 'core/repositories';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GroupService {
  constructor(private groupRepository: GroupRepository) {
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
}
