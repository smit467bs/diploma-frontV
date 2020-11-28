import { createSelector, Selector } from '@ngrx/store';

import { UserInfo, UserState } from './models';
import { EipState } from '../reducers';

export const getUserState: Selector<EipState, UserState> = ({user}) => user;

export const getAppLoadState: Selector<EipState, boolean> = createSelector(
  getUserState,
  ({appLoaded}) => appLoaded
);

export const getUserInfo: Selector<EipState, UserInfo> = createSelector(
  getUserState,
  ({userInfo}) => userInfo
);

export const getToken: Selector<EipState, string> = createSelector(
  getUserState,
  ({token}) => token
);
