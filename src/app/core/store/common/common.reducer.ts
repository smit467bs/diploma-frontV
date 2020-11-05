import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { CommonState } from './models';
import * as CommonActions from './common.actions';

export const INITIAL_STATE: CommonState = {
  interviews: null
};

const commonReducer: ActionReducer<CommonState> = createReducer(
  INITIAL_STATE,
  on(CommonActions.LoadInterviewsSuccess, (state, {interviews}) => ({
    ...state,
    interviews
  }))
);

export function reducer(state: CommonState, action: Action): CommonState {
  return commonReducer(state, action);
}
