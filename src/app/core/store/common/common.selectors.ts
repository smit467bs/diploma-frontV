import { createSelector, Selector } from '@ngrx/store';

import { EipState } from '../reducers';
import { CommonState, Interview } from './models';

export const getCommonState: Selector<EipState, CommonState> = ({common}) => common;

export const getInterviews: Selector<EipState, Array<Interview>> = createSelector(
  getCommonState,
  ({interviews}) => interviews
);
