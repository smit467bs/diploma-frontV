import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AnswerService, InterviewService } from 'core/services';
import { Interview } from 'core/store/common/models';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { FormBaseComponent } from 'shared/components/base';
import { QuestionType } from 'core/models/types';
import { getClasses, prepareDataToSaveAnswers } from 'core/utils';
import { SaveInterviewAnswers } from 'core/models/request';

@Component({
  selector: 'interview-page',
  templateUrl: './interview-page.component.html',
  styleUrls: ['./interview-page.component.scss']
})
export class InterviewPageComponent extends FormBaseComponent implements OnInit {
  id$: Observable<string>;
  interview: Interview;

  questionType = QuestionType;
  getClasses = getClasses;

  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private interviewService: InterviewService,
              private answerService: AnswerService
  ) {
    super();
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
        this.form = this.fb.group({
          ...interview.questions.reduce((acc, question) => ({
            ...acc,
            [question.id]: question.type === QuestionType.CHOICE_MANY
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
