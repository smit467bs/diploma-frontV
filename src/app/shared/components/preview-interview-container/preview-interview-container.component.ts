import { Component } from '@angular/core';
import { DisplayType } from '../../../core/models/types';
import { Logger } from '../../../core/services/logger.service';

@Component({
  selector: 'app-preview-interview-container',
  templateUrl: './preview-interview-container.component.html',
  styleUrls: ['preview-interview-container.component.scss']
})
export class PreviewInterviewContainerComponent {
  currentDisplayType: DisplayType = 'line';
  interviewTitles: Array<string> = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth'
  ];

  constructor(private logger: Logger) {
  }

  onChangeDisplayType(value: DisplayType) {
    this.currentDisplayType = value;
  }
}
