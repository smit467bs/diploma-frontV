import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Interview } from 'core/store/common/models';
import { InterviewService, Logger } from 'core/services';

@Component({
  selector: 'app-preview-interview-container',
  templateUrl: './preview-interview-container.component.html',
  styleUrls: ['preview-interview-container.component.scss']
})
export class PreviewInterviewContainerComponent implements OnInit {
  interviews: Observable<Array<Interview>>;

  constructor(private logger: Logger,
              private interviewService: InterviewService) {
    // this.interviews = mockedInterviews;
  }

  ngOnInit(): void {
    this.interviews = this.interviewService.getInterviewPreview();
  }

  addInterview() {
    console.log('add');
  }

}
