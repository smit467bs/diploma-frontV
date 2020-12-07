import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService, InterviewService } from 'core/services';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import { checkInterviewStatistic, getRouteParam$ } from 'core/utils';
import { Interview } from 'core/models/client';
import { AnswerStatistic } from 'core/models/response';
import { isNil } from 'lodash';

@Component({
  selector: 'interview-charts-page',
  templateUrl: './interview-charts-page.component.html',
  styleUrls: ['./interview-charts-page.component.scss']
})
export class InterviewChartsPageComponent implements OnInit {
  id$: Observable<string>;

  pageLoaded = false;
  answersStatistic: Array<AnswerStatistic>;
  interview: Interview;

  constructor(private activatedRoute: ActivatedRoute,
              private answerService: AnswerService,
              private interviewService: InterviewService) {
    this.id$ = getRouteParam$(this.activatedRoute, 'id');
  }

  ngOnInit(): void {
    this.id$.pipe(
      switchMap((id) => combineLatest([
        this.answerService.getAnswersByInterviewId(id),
        this.interviewService.getInterviewById(id)
      ])),
      map(([statistic, interview]) => ({statistic, interview})),
      filter(({statistic, interview}) => !isNil(statistic) && !isNil(interview)),
      tap(({statistic, interview}) => {
        this.interview = interview;
        this.answersStatistic = checkInterviewStatistic(interview, statistic);
        this.pageLoaded = true;
        console.log(this.answersStatistic);
      })
    ).subscribe();

  }


  getQuestionStatistic(id: string): Array<{ name: string, value: number }> {
    return this.answersStatistic.find(({question_id}) => question_id === id).answers;
  }

  get templateRows(): string {
    return 'repeat(' + this.interview.questions.length + 2 + ' 60%)';
  }


}
