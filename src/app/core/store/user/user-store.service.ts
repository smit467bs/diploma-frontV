import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { UserSelectors } from './index';
import { EipState } from '../reducers';
import { updateLoadState } from './user.actions';

@Injectable({providedIn: 'root'})
export class UserStoreService {
  public appLoadState$: Observable<boolean>;

  constructor(private store$: Store<EipState>) {
    this.appLoadState$ = this.store$.select(UserSelectors.getAppLoadState);
  }

  public changeLoadState(appLoaded: boolean): void {
    this.store$.dispatch(
      updateLoadState({appLoaded})
    );
  }

}
