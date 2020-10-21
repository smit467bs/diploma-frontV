import { Component } from '@angular/core';

import { Logger } from 'core/services';
import { mockedInterviews } from 'core/mocked';
import { Interview } from 'core/models';

@Component({
  selector: 'app-preview-interview-container',
  templateUrl: './preview-interview-container.component.html',
  styleUrls: ['preview-interview-container.component.scss']
})
export class PreviewInterviewContainerComponent {
  interviews: Array<Interview> = [];

  constructor(private logger: Logger) {
    this.interviews = mockedInterviews;
  }

}
