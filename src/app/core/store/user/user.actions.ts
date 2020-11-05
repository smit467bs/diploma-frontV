import { createAction, props } from '@ngrx/store';

const actionGroup = '[USER]';

export const LOAD_STATE = `${actionGroup} LOAD_STATE`;
export const updateLoadState = createAction(
  LOAD_STATE,
  props<{ appLoaded: boolean }>()
);
