import { Component, OnInit, EventEmitter } from '@angular/core';
import { cartItems } from '../services/cartitem.service';
import { IProduct } from '../shared classesand types/IProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartt: IProduct[];
  constructor(private cart: cartItems) {
    this.cartt = cart.cartitems;
  }

  ngOnInit(): void {}
  removeitem(i:any) {
   this.cartt.splice(i,1)
   console.log(i)
  }
}
