import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(300));

    // return new Promise((resolve) => {
    //   // simulate server latency with 3 seconds delay
    //   setTimeout(() => {
    //     resolve(DISHES);
    //   }, 3000);
    // });
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(3000));
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(DISHES.filter((dish) => dish.id === id)[0]);
    //   }, 3000);
    // });
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(3000));
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(DISHES.filter((dish) => dish.featured)[0]);
    //   }, 3000);
    // });
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map((dish) => dish.id));
  }
}
