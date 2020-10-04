import { UserState } from './models';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { updateLoadState } from './user.actions';

export const INITIAL_STATE: UserState = {
  appLoaded: false,
};

const userReducer: ActionReducer<UserState> = createReducer(
  INITIAL_STATE,
  on(updateLoadState, (state, {appLoaded}) => ({
    ...state,
    appLoaded
  }))
);

export function reducer(state: UserState, action: Action): UserState {
  return userReducer(state, action);
}
