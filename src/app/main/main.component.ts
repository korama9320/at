import { Component, OnInit } from '@angular/core';
import { cartItems } from '../services/cartitem.service';
import { categories } from '../services/category.service';
import { ICategory } from '../shared classesand types/ICategory';
import { IProduct } from '../shared classesand types/IProduct';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  categories: ICategory[] = [];
  selec: number = 0;
  carti: IProduct[];
  constructor(private catlist: categories, private cart: cartItems) {
    this.categories = catlist.get();
    this.carti = cart.cartitems;
  }

  ngOnInit(): void {}
  reciveitem(item: any) {
    this.carti.push(item);
  }
}
