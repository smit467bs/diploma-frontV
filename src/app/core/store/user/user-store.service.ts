import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EipState } from '../reducers';
import * as UserSelectors from './user.selectors';
import * as UserActions from './user.actions';

@Injectable({providedIn: 'root'})
export class UserStoreService {
  public appLoadState$: Observable<boolean>;

  constructor(private store$: Store<EipState>) {
    this.appLoadState$ = this.store$.select(
      UserSelectors.getAppLoadState
    );
  }

  public changeLoadState(appLoaded: boolean): void {
    this.store$.dispatch(
      UserActions.updateLoadState({appLoaded})
    );
  }

}
