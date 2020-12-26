import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { CommonState } from './models';
import * as CommonActions from './common.actions';

export const INITIAL_STATE: CommonState = {
  interviews: null,
  groups: null
};

const commonReducer: ActionReducer<CommonState> = createReducer(
  INITIAL_STATE,
  on(CommonActions.LoadInterviewsSuccess, (state, {interviews}) => ({
    ...state,
    interviews
  })),
  on(CommonActions.LoadGroupsSuccess, (state, {groups}) => ({
    ...state,
    groups
  }))
);

export function reducer(state: CommonState, action: Action): CommonState {
  return commonReducer(state, action);
}
