import { Component, Input } from '@angular/core';

import { PreviewInterview } from 'core/store/common/models';

@Component({
  selector: 'app-preview-interview',
  templateUrl: './preview-interview.component.html',
  styleUrls: ['./preview-interview.component.scss']
})
export class PreviewInterviewComponent {
  @Input()
  interview: PreviewInterview;

  @Input()
  isUserAdmin: boolean;

  constructor() {
  }
}
