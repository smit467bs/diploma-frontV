import { createAction, props } from '@ngrx/store';


const actionGroup = '[USER]';

export const updateLoadState = createAction(
  `${actionGroup} LOAD_STATE`,
  props<{ isLoaded: boolean }>()
);
