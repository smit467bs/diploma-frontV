import { Component } from '@angular/core';

import { Logger } from 'core/services';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews-page.component.html',
  styleUrls: ['./interviews-page.component.scss']
})
export class InterviewsPageComponent {
  constructor(private logger: Logger) {
  }
}
