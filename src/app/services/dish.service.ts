import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Promise<Dish[]> {
    return of(DISHES).pipe(delay(300)).toPromise();

    // return new Promise((resolve) => {
    //   // simulate server latency with 3 seconds delay
    //   setTimeout(() => {
    //     resolve(DISHES);
    //   }, 3000);
    // });
  }

  getDish(id: string): Promise<Dish> {
    return of(DISHES.filter((dish) => dish.id === id)[0])
      .pipe(delay(3000))
      .toPromise();
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(DISHES.filter((dish) => dish.id === id)[0]);
    //   }, 3000);
    // });
  }

  getFeaturedDish(): Promise<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0])
      .pipe(delay(3000))
      .toPromise();
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(DISHES.filter((dish) => dish.featured)[0]);
    //   }, 3000);
    // });
  }
}
