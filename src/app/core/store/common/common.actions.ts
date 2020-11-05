import { createAction, props } from '@ngrx/store';
import { Interview } from './models';

const actionGroup = '[COMMON]';

export const INITIALIZE = `${actionGroup} INITIALIZE`;
export const Initialize = createAction(INITIALIZE);

export const LOAD_INTERVIEWS = `${actionGroup} LOAD_INTERVIEWS`;
export const LoadInterviews = createAction(LOAD_INTERVIEWS);

export const LOAD_INTERVIEWS_SUCCESS = `${actionGroup} LOAD_INTERVIEWS_SUCCESS`;
export const LoadInterviewsSuccess = createAction(
  LOAD_INTERVIEWS_SUCCESS,
  props<{interviews: Array<Interview>}>()
);
