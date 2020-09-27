import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-interview',
  templateUrl: './preview-interview.component.html',
  styleUrls: ['./preview-interview.component.scss']
})
export class PreviewInterviewComponent {
  @Input()
  title: string;

}
