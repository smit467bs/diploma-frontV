import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, switchMapTo } from 'rxjs/operators';

import * as CommonActions from './common.actions';
import { GroupService, InterviewService } from 'core/services';

@Injectable()
export class CommonEffects {
  initializeInterviews$: Observable<Action>;
  loadInterviews$: Observable<Action>;
  initializeGroups$: Observable<Action>;
  loadGroups$: Observable<Action>;
  deleteGroup$: Observable<Action>;

  constructor(
    private actions$: Actions,
    private interviewService: InterviewService,
    private groupService: GroupService
  ) {
    this.initializeInterviews$ = createEffect(() =>
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
        map((interviews) => CommonActions.LoadInterviewsSuccess({interviews}))
      ));

    this.initializeGroups$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CommonActions.InitializeGroups),
        switchMapTo([
          CommonActions.LoadGroups()
        ])
      ));

    this.loadGroups$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CommonActions.LoadGroups),
        switchMapTo(groupService.getGroupsPreview()),
        map((groups) => CommonActions.LoadGroupsSuccess({groups}))
      ));

    this.deleteGroup$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CommonActions.DeleteGroup),
        switchMap(({id}) => groupService.deleteGroup(id)),
        map(() => CommonActions.LoadGroups())
      ));

  }
}
