import { createAction, props } from '@ngrx/store';
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
  props<{ userInfo: UserInfo }>()
);

export const UPDATE_TOKEN = `${actionGroup} UPDATE_TOKEN`;
export const updateToken = createAction(
  UPDATE_TOKEN,
  props<{token: string}>()
);

