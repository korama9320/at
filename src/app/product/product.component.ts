import { outputAst } from '@angular/compiler';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { categories } from '../services/category.service';
import { products } from '../services/product.service';
import { discount } from '../shared classesand types/DiscountOffer';
import { ICategory } from '../shared classesand types/ICategory';
import { IProduct } from '../shared classesand types/IProduct';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() selected: number = 0;
  @Output() addToCart: EventEmitter<IProduct>;

  products: IProduct[] = [];

  Discount: discount = discount.none;
  StoreName: string = 'iti';
  storlogo: string = 'iti';
  clientName: string = 'hgffsjh';
  isPurchesed: boolean = false;

  constructor(private prolist: products) {
    this.products = prolist.get();
    this.addToCart = new EventEmitter<IProduct>();
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.products = this.prolist.filter(this.selected);
  }
  addtocart(obj: any) {
    this.addToCart.emit(obj);
  }
}
