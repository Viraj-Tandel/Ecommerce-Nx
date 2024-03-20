import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from './category.state';

const selectCategoryState = createFeatureSelector<CategoryState>('category');

export const selectCategories = createSelector(
  selectCategoryState,
  (state) => state.categories
);

export const selectCurrentCategory = createSelector(
  selectCategoryState,
  (state) => state.currentCategory
);
