import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PreviewInterview } from 'core/models/response';
import { EipState } from '../reducers';
import * as CommonSelectors from './common.selectors';
import * as CommonActions from './common.actions';

@Injectable({providedIn: 'root'})
export class CommonStoreService {
  public interviews$: Observable<Array<PreviewInterview>>;
  public groups$: Observable<Array<any>>;

  constructor(private store$: Store<EipState>) {
    this.interviews$ = this.store$.select(
      CommonSelectors.getInterviews
    );
    this.groups$ = this.store$.select(
      CommonSelectors.getGroups
    );
  }

  public initializeInterviews(): void {
    this.store$.dispatch(CommonActions.InitializeInterviews());
  }

  public initializeGroups(): void {
    this.store$.dispatch(CommonActions.InitializeGroups());
  }

  public deleteGroup(id: string): void {
    this.store$.dispatch(CommonActions.DeleteGroup({id}));
  }
}
