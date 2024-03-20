export interface CategoryState {
  categories: string[];
  currentCategory: string;
}

export const categoryInitialState: CategoryState = {
  categories: [],
  currentCategory: '',
};
