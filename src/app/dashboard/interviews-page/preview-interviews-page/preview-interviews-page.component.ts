import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Logger } from 'core/services';
import { CommonStoreService } from 'core/store/common';
import { UserInfo } from 'core/store/user/models';
import { UserStoreService } from 'core/store/user';
import { PreviewInterview } from 'core/models/response';

@Component({
  selector: 'preview-interviews',
  templateUrl: './preview-interviews-page.component.html',
  styleUrls: ['./preview-interviews-page.component.scss']
})
export class PreviewInterviewsPageComponent implements OnInit {
  interviews$: Observable<Array<PreviewInterview>>;

  user$: Observable<UserInfo>;

  constructor(private logger: Logger,
              private commonStoreService: CommonStoreService,
              private userStoreService: UserStoreService) {
  }

  ngOnInit(): void {
    this.commonStoreService.initializeInterviews();

    this.interviews$ = this.commonStoreService.interviews$;
    this.user$ = this.userStoreService.userInfo$;

  }
}
