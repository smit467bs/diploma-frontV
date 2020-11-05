import { ActionReducerMap } from '@ngrx/store';
import { UserState } from './user/models';
import { CommonState } from './common/models';
import { reducer as userReducer } from './user';
import { reducer as commonReducer } from './common';

export const moduleStateName: string = 'eip';

export interface EipState {
  user: UserState;
  common: CommonState;
}

export const reducers: ActionReducerMap<EipState> = {
  user: userReducer,
  common: commonReducer
};
