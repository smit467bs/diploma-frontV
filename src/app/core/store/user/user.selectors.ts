import { createSelector, Selector } from '@ngrx/store';

import { UserState } from './models';
import { EipState } from '../reducers';

export const getUserState: Selector<EipState, UserState> = ({user}) => user;

export const getAppLoadState: Selector<EipState, boolean> = createSelector(
  getUserState,
  ({isLoaded}) => isLoaded
);
