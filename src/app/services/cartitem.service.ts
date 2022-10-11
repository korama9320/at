import { Injectable } from '@angular/core';
import { IProduct } from '../shared classesand types/IProduct';

@Injectable({ providedIn: 'root' })
export class cartItems {
  cartitems: IProduct[];
  constructor() {
    this.cartitems = [];
  }
}
