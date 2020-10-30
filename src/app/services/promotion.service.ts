import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => dish.id === id)[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
