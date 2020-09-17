import { ActionReducerMap } from '@ngrx/store';
import { UserState } from './user/models';
import { reducer as userReducer } from './user/index';

export const moduleStateName: string = 'eip';

export interface EipState {
  user: UserState;
}

export const reducers: ActionReducerMap<EipState> = {
  user: userReducer,
};
