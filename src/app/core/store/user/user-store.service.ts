import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EipState } from '../reducers';
import * as UserSelectors from './user.selectors';
import * as UserActions from './user.actions';
import { UserInfo } from './models';
import { LocalStorageService } from 'core/services';
import { AuthResponse } from 'core/models/responce';

@Injectable({providedIn: 'root'})
export class UserStoreService {
  public appLoadState$: Observable<boolean>;
  public userInfo$: Observable<UserInfo>;
  public token$: Observable<string>;

  constructor(private store$: Store<EipState>,
              private localStorageService: LocalStorageService) {
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

  public loginUser(authResponse: AuthResponse): void {
    this.store$.dispatch(
      UserActions.loginUser({authResponse})
    );
  }

  public updateToken(token: string): void {
    this.localStorageService.storeOnLocalStorage('token', token);
    this.store$.dispatch(
      UserActions.saveToken({token})
    );
  }

}
