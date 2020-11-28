import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';

import * as CommonActions from './common.actions';
import { InterviewService } from 'core/services';

@Injectable()
export class CommonEffects {
  initialize$: Observable<Action>;
  loadInterviews$: Observable<Action>;

  constructor(
    private actions$: Actions,
    private interviewService: InterviewService
  ) {
    this.initialize$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CommonActions.InitializeInterviews),
        switchMapTo([
          CommonActions.LoadInterviews()
        ])
      ));

    this.loadInterviews$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CommonActions.LoadInterviews),
        switchMapTo(interviewService.getInterviewPreview()),
        switchMap((interviews) => [
          CommonActions.LoadInterviewsSuccess({interviews})
        ])
      ));
  }
}
