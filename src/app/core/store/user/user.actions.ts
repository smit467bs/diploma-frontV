import { createAction, props } from '@ngrx/store';

import { AuthResponse } from 'core/models/response';
import { UserInfo } from './models';

const actionGroup = '[USER]';

export const LOAD_STATE = `${actionGroup} LOAD_STATE`;
export const updateLoadState = createAction(
  LOAD_STATE,
  props<{ appLoaded: boolean }>()
);

export const LOGIN_USER = `${actionGroup} LOGIN_USER`;
export const loginUser = createAction(
  LOGIN_USER,
  props<{ authResponse: AuthResponse }>()
);

export const SAVE_USER_INFO = `${actionGroup} SAVE_USER_INFO`;
export const saveUserInfo = createAction(
  SAVE_USER_INFO,
  props<{userInfo: UserInfo}>()
);

export const SAVE_TOKEN = `${actionGroup} SAVE_TOKEN`;
export const saveToken = createAction(
  SAVE_TOKEN,
  props<{token: string}>()
);

