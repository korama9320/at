import { Injectable } from '@angular/core';
import { ICategory } from '../shared classesand types/ICategory';

@Injectable({ providedIn: 'root' })
export class categories {
  categorylist: ICategory[];
  Selec: number = 0;
  constructor() {
    this.categorylist = [
      {
        ID: 0,
        Name: 'ALL',
      },
      {
        ID: 1,
        Name: 'bags',
      },
      {
        ID: 2,
        Name: 'bottels',
      },
    ];
  }

  get(): ICategory[] {
    return this.categorylist;
  }
}
