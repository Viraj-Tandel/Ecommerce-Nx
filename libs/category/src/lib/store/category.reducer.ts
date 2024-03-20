import { createReducer, on } from '@ngrx/store';
import { categoryInitialState } from './category.state';
import { getCategorySuccess } from './catgory.action';

export const categoryReducer = createReducer(
  categoryInitialState,
  on(getCategorySuccess, (state, { categories }) => ({ ...state, categories }))
);
