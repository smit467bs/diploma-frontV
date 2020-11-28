import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { LocalStorageService } from 'core/services';
import * as UserActions from './user.actions';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  loginUser$: Observable<Action>;

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
  ) {
    this.loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginUser),
      switchMap(({authResponse}) => {
        const {token, userInfo} = authResponse;
        this.localStorageService.storeOnLocalStorage('token', token);
        return [
          UserActions.saveToken({token}),
          UserActions.saveUserInfo({userInfo})
        ];
      })
    ));
  }
}
