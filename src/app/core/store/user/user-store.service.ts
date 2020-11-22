import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EipState } from '../reducers';
import * as UserSelectors from './user.selectors';
import * as UserActions from './user.actions';
import { UserInfo } from './models';

@Injectable({providedIn: 'root'})
export class UserStoreService {
  public appLoadState$: Observable<boolean>;
  public userInfo$: Observable<UserInfo>;
  public token$: Observable<string>;

  constructor(private store$: Store<EipState>) {
    this.appLoadState$ = this.store$.select(
      UserSelectors.getAppLoadState
    );

    this.userInfo$ = this.store$.select(
      UserSelectors.getUserInfo
    );

    this.token$ = this.store$.select(
      UserSelectors.getToken
    );
  }

  public changeLoadState(appLoaded: boolean): void {
    this.store$.dispatch(
      UserActions.updateLoadState({appLoaded})
    );
  }

  public loginUser(userInfo: UserInfo): void {
    this.store$.dispatch(
      UserActions.loginUser({userInfo})
    );
  }

  public updateToken(token: string): void {
    this.store$.dispatch(
      UserActions.updateToken({token})
    );
  }

}
