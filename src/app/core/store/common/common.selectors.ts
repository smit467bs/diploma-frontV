import { createSelector, Selector } from '@ngrx/store';

import { EipState } from '../reducers';
import { CommonState, PreviewInterview } from './models';

export const getCommonState: Selector<EipState, CommonState> = ({common}) => common;

export const getInterviews: Selector<EipState, Array<PreviewInterview>> = createSelector(
  getCommonState,
  ({interviews}) => interviews
);
