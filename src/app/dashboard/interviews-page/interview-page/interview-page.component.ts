import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { InterviewService } from 'core/services';
import { Interview } from 'core/store/common/models';

@Component({
  selector: 'interview-page',
  templateUrl: './interview-page.component.html',
  styleUrls: ['./interview-page.component.scss']
})
export class InterviewPageComponent implements OnInit {
  id$: Observable<string>;
  interview: Interview;

  constructor(private activatedRoute: ActivatedRoute,
              private interviewService: InterviewService
  ) {
    this.id$ = this.activatedRoute.paramMap.pipe(
      filter(paramMap => !!paramMap.get('id')),
      map(paramMap => paramMap.get('id'))
    );
  }

  ngOnInit(): void {
    this.id$.pipe(
      switchMap(id => {
        return this.interviewService.getInterviewById(id);
      }),
      map(interview => {
        this.interview = interview;
      })
    ).subscribe();
  }

}
