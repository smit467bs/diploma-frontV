import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AnswerService, InterviewService } from 'core/services';
import { FormBaseComponent } from 'shared/components/base';
import { getClasses, getRouteParam$, isChoiceQuestion, prepareDataToSaveAnswers } from 'core/utils';
import { SaveInterviewAnswers } from 'core/models/request';
import { QuestionType } from 'core/models/questions';
import { Interview } from 'core/models/response';

@Component({
  selector: 'interview-page',
  templateUrl: './interview-page.component.html',
  styleUrls: ['./interview-page.component.scss']
})
export class InterviewPageComponent extends FormBaseComponent implements OnInit {
  id$: Observable<string>;
  interview: Interview;
  answer: any;

  questionType = QuestionType;
  getClasses = getClasses;

  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private interviewService: InterviewService,
              private answerService: AnswerService
  ) {
    super();
    this.id$ = getRouteParam$(this.activatedRoute, 'id');
  }

  ngOnInit(): void {
    this.id$.pipe(
      switchMap(id => this.interviewService.getInterviewById(id)),
      map(interview => {
        this.interview = interview;
        this.form = this.fb.group({
          ...interview.questions.reduce((acc, question) => ({
            ...acc,
            [question.id]: isChoiceQuestion(question) && question.type === QuestionType.CHOICE_MANY
              ? new FormArray(question.options.map(() => new FormControl('')))
              : new FormControl('')
          }), {})
        });
      })
    ).subscribe();
  }

  isAdmin(): boolean {
    return true;
  }

  submitForm(): void {
    const requestBody: SaveInterviewAnswers = {
      interview_id: this.interview._id,
      answers: prepareDataToSaveAnswers(this.form.value, this.interview)
    };
    this.answerService.saveAnswer(requestBody).subscribe(
      next => {
        console.log(next);
      },
      err => {
        console.log(err);
      }
    );
    // console.log(requestBody);
  }

  downloadReport(): void {
    console.log('downloaded');
  }

  toggleCharts(): void {
    console.log('toggle charts');
  }

}
