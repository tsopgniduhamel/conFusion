import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}
  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(3000));

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(LEADERS);
    //   }, 3000);
    // });
  }

  getDish(id: string): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.id === id)[0]).pipe(
      delay(3000)
    );

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(LEADERS.filter((leader) => leader.id === id)[0]);
    //   }, 3000);
    // });
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured == true)[0]).pipe(
      delay(3000)
    );

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(LEADERS.filter((leader) => leader.featured == true)[0]);
    //   }, 3000);
    // });
  }
}
