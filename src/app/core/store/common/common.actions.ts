import { createAction, props } from '@ngrx/store';

import { PreviewInterview } from 'core/models/response';

const actionGroup = '[COMMON]';

export const INITIALIZE_INTERVIEWS = `${actionGroup} INITIALIZE_INTERVIEWS`;
export const InitializeInterviews = createAction(INITIALIZE_INTERVIEWS);

export const LOAD_INTERVIEWS = `${actionGroup} LOAD_INTERVIEWS`;
export const LoadInterviews = createAction(LOAD_INTERVIEWS);

export const LOAD_INTERVIEWS_SUCCESS = `${actionGroup} LOAD_INTERVIEWS_SUCCESS`;
export const LoadInterviewsSuccess = createAction(
  LOAD_INTERVIEWS_SUCCESS,
  props<{interviews: Array<PreviewInterview>}>()
);

export const INITIALIZE_GROUPS = `${actionGroup} INITIALIZE_GROUPS`;
export const InitializeGroups = createAction(INITIALIZE_GROUPS);

export const LOAD_GROUPS = `${actionGroup} LOAD_GROUPS`;
export const LoadGroups = createAction(LOAD_GROUPS);

export const LOAD_GROUPS_SUCCESS = `${actionGroup} LOAD_GROUPS_SUCCESS`;
export const LoadGroupsSuccess = createAction(
  LOAD_GROUPS_SUCCESS,
  props<{groups: Array<any>}>()
);
