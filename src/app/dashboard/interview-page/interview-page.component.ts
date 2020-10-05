import { Component } from '@angular/core';
import { Logger } from '../../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './interview-page.component.html',
  styleUrls: ['./interview-page.component.scss']
})

export class InterviewPageComponent {
  constructor(private logger: Logger) {
  }
}
