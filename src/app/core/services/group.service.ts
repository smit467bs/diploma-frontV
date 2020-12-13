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
}