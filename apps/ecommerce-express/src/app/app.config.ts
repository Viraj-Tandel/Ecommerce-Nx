import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { CategoryEffect } from '@ecommerce-express/category';
import { categoryReducer } from '@ecommerce-express/category';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    provideStore({ category: categoryReducer }),
    provideEffects([CategoryEffect]),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
    }),
    provideHttpClient(),
  ],
};
