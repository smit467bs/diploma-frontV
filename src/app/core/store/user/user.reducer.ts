import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { UserState } from './models';
import * as UserActions from './user.actions';

export const INITIAL_STATE: UserState = {
  appLoaded: false,
  token: null,
  userInfo: null,
};

const userReducer: ActionReducer<UserState> = createReducer(
  INITIAL_STATE,
  on(UserActions.updateLoadState, (state, {appLoaded}) => ({
    ...state,
    appLoaded
  })),
  on(UserActions.saveUserInfo, (state, {userInfo}) => ({
    ...state,
    userInfo
  })),
  on(UserActions.saveToken, (state, {token}) => ({
    ...state,
    token
  }))
);

export function reducer(state: UserState, action: Action): UserState {
  return userReducer(state, action);
}
