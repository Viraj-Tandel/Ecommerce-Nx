import { createAction, props } from '@ngrx/store';

export const getCategory = createAction('[Category] GET Category');

export const getCategorySuccess = createAction(
  '[Category] GET Category Success',
  props<{ categories: string[] }>()
);

// export const getCategoryFail = createAction();
