import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getCategory, getCategorySuccess } from './catgory.action';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { CategoryService } from '../service/category.service';

@Injectable()
export class CategoryEffect {
  constructor(
    private action$: Actions,
    private categoryService: CategoryService
  ) {}

  loadCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCategory),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories) => getCategorySuccess({ categories })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
