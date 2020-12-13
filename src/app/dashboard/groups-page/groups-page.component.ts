import { Component, OnInit } from '@angular/core';

import { GroupService } from 'core/services';
import { Observable } from 'rxjs';
import { UserStoreService } from 'core/store/user';
import { UserInfo } from 'core/store/user/models';

@Component({
  selector: 'app-groups',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss']
})
export class GroupsPageComponent implements OnInit {
  groups$: Observable<Array<any>>;
  user$: Observable<UserInfo>;

  constructor(private groupService: GroupService,
              private userStoreService: UserStoreService) {
  }

  ngOnInit(): void {
    this.groups$ = this.groupService.getGroupsPreview();
    this.user$ = this.userStoreService.userInfo$;
  }
}
