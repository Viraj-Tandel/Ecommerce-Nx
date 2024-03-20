import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CategoryService } from '@ecommerce-express/category';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { getCategory, selectCategories } from '@ecommerce-express/category';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    MainNavComponent,
    AsyncPipe,
    JsonPipe,
    CommonModule,
  ],
  selector: 'ecommerce-express-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ecommerce-express';
  categories: string[] = [];

  constructor(private categoryService: CategoryService, private store: Store) {}
  ngOnInit(): void {
    this.initializeComponent();
    this.initializeSubscription();
  }

  initializeSubscription() {
    this.store.select(selectCategories).subscribe((res) => {
      this.categories = res;
    });
  }

  initializeComponent() {
    this.store.dispatch(getCategory());
  }
}
