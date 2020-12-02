import { Component, Input } from '@angular/core';

import { Interview } from 'core/store/common/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-interview',
  templateUrl: './preview-interview.component.html',
  styleUrls: ['./preview-interview.component.scss']
})
export class PreviewInterviewComponent {
  @Input()
  interview: Interview;

  @Input()
  isUserAdmin: boolean;

  constructor(private router: Router) {
  }
}
