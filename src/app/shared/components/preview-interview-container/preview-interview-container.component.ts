import { Component } from '@angular/core';
import { Logger } from '../../../core/services/logger.service';
import { Interview } from '../../../core/models';
import { mockedInterviews } from '../../../core/mocked';

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
