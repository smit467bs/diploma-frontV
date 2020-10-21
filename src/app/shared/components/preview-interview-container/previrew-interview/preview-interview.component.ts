import { Component, Input } from '@angular/core';

import { Interview } from 'core/models';

@Component({
  selector: 'app-preview-interview',
  templateUrl: './preview-interview.component.html',
  styleUrls: ['./preview-interview.component.scss']
})
export class PreviewInterviewComponent {
  @Input()
  interview: Interview;

}
