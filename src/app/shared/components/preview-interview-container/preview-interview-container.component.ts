import { Component, Input } from '@angular/core';

import { Interview } from 'core/store/common/models';
import { Logger } from 'core/services';

@Component({
  selector: 'app-preview-interview-container',
  templateUrl: './preview-interview-container.component.html',
  styleUrls: ['preview-interview-container.component.scss']
})
export class PreviewInterviewContainerComponent {
  @Input()
  interviews: Array<Interview>;

  constructor(private logger: Logger) {
  }

}
