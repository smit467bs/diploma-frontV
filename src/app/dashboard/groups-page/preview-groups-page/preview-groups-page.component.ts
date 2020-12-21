import { Component, OnInit } from '@angular/core';
import { GroupService } from 'core/services';
import { Observable } from 'rxjs';

import { UserStoreService } from 'core/store/user';
import { UserInfo } from 'core/store/user/models';
import { PreviewGroup } from 'core/models/response';

@Component({
  selector: 'app-preview-groups-page',
  templateUrl: './preview-groups-page.component.html',
  styleUrls: ['./preview-groups-page.component.scss']
})
export class PreviewGroupsPageComponent implements OnInit {
  groups$: Observable<Array<PreviewGroup>>;
  user$: Observable<UserInfo>;

  constructor(private groupService: GroupService,
              private userStoreService: UserStoreService) {
  }

  ngOnInit(): void {
    this.groups$ = this.groupService.getGroupsPreview();
    this.user$ = this.userStoreService.userInfo$;
  }

  onRequestToJoin(groupId: string) {
    this.groupService.addCurrentUserTo(groupId, {addTo: 'requested'}).subscribe();
  }
}
