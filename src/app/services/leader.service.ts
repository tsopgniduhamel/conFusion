import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}
  getLeaders(): Promise<Leader[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(LEADERS);
      }, 3000);
    });
  }

  getDish(id: string): Promise<Leader> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(LEADERS.filter((leader) => leader.id === id)[0]);
      }, 3000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(LEADERS.filter((leader) => leader.featured == true)[0]);
      }, 3000);
    });
  }
}
