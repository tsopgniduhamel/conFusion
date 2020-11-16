import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}

  getPromotions(): Promise<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(3000)).toPromise();

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(PROMOTIONS);
    //   }, 3000);
    // });
  }

  getPromotion(id: string): Promise<Promotion> {
    return of(PROMOTIONS.filter((promo) => promo.id === id)[0])
      .pipe(delay(3000))
      .toPromise();
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(PROMOTIONS.filter((promo) => promo.id === id)[0]);
    //   }, 3000);
    // });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return of(PROMOTIONS.filter((promo) => promo.featured)[0])
      .pipe(delay(3000))
      .toPromise();
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(PROMOTIONS.filter((promo) => promo.featured)[0]);
    //   }, 3000);
    // });
  }
}
