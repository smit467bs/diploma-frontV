import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PreviewInterview } from './models';
import { EipState } from '../reducers';
import * as CommonSelectors from './common.selectors';
import * as CommonActions from './common.actions';

@Injectable({providedIn: 'root'})
export class CommonStoreService {
  public interviews$: Observable<Array<PreviewInterview>>;

  constructor(private store$: Store<EipState>) {
    this.interviews$ = this.store$.select(
      CommonSelectors.getInterviews
    );
  }

  public initialize(): void {
    this.store$.dispatch(CommonActions.InitializeInterviews());
  }

}
