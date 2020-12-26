import { Component, OnInit } from '@angular/core';
import { GroupService } from 'core/services';
import { Observable } from 'rxjs';

import { UserStoreService } from 'core/store/user';
import { UserInfo } from 'core/store/user/models';
import { PreviewGroup } from 'core/models/response';
import { CommonStoreService } from 'core/store/common';

@Component({
  selector: 'app-preview-groups-page',
  templateUrl: './preview-groups-page.component.html',
  styleUrls: ['./preview-groups-page.component.scss']
})
export class PreviewGroupsPageComponent implements OnInit {
  groups$: Observable<Array<PreviewGroup>>;
  user$: Observable<UserInfo>;

  constructor(private commonStoreService: CommonStoreService,
              private groupService: GroupService,
              private userStoreService: UserStoreService) {
  }

  ngOnInit(): void {
    this.commonStoreService.initializeGroups();

    this.groups$ = this.commonStoreService.groups$;
    this.user$ = this.userStoreService.userInfo$;
  }

  onDeleteGroup(groupId: string) {
    console.log(groupId);
  }
}
