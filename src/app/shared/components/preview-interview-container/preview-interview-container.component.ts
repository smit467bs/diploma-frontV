import { Component, OnInit } from '@angular/core';

import { Logger } from 'core/services';
import { mockedInterviews } from 'core/mocked';
import { Interview } from 'core/models';
import { Observable } from 'rxjs';
import { InterviewService } from 'core/services/interview.service';

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

}
