import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Logger } from 'core/services';
import { CommonStoreService } from 'core/store/common';
import { Interview } from 'core/store/common/models';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews-page.component.html',
  styleUrls: ['./interviews-page.component.scss']
})
export class InterviewsPageComponent implements OnInit {
  interviews$: Observable<Array<Interview>>;

  constructor(private logger: Logger,
              private commonStoreService: CommonStoreService) {
  }

  ngOnInit(): void {
    this.commonStoreService.initialize();

    this.interviews$ = this.commonStoreService.interviews$;
  }
}
