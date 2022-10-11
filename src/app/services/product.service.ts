import { Injectable } from '@angular/core';
import { IProduct } from '../shared classesand types/IProduct';

@Injectable({ providedIn: 'root' })
export class products {
  productlist: IProduct[];
  constructor() {
    this.productlist = [
      {
        Name: 'sdfkjh',
        ID: 254,
        Quantity: 8,
        Price: 585,
        Image: '../../assets/Bags1.jpg',
        Category: 1,
      },
      {
        Name: 'sdfkjh',
        ID: 5467,
        Quantity: 58,
        Price: 585,
        Image: '../../assets/bottel3.jpg',
        Category: 2,
      },
      {
        Name: 'sdfkjh',
        ID: 4525,
        Quantity: 58,
        Price: 585,
        Image: '../../assets/bottel1.jpg',
        Category: 2,
      },
      {
        Name: 'sdfkjh',
        ID: 2545,
        Quantity: 58,
        Price: 585,
        Image: '../../assets/Bags2.jpg',
        Category: 1,
      },
    ];
  }

  get() {
    return this.productlist;
  }
  filter(id: number): IProduct[] {
    if (id == 0) {
      return this.productlist;
    }
    return this.productlist.filter((item) => item.Category == id);
  }
}
