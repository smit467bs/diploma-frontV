import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'interview-page',
  templateUrl: './interview-page.component.html',
  styleUrls: ['./interview-page.component.scss']
})
export class InterviewPageComponent {
  id: string;

  constructor(private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(param => this.id = param['id']);
  }
}
