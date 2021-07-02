import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { StoreDataService } from '../services/store-data.service';

export interface Product {
  img: string;
  name: string;
  price: string;
  description: string;
  count: number;
}

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.scss']
})

export class StoreFrontComponent implements OnInit {

  storeData: Product[] = [];
  cartData: Product[] = [];
  cartTotal = 0;
  cartLength = 0;
  name = '';

  constructor(private storeService: StoreDataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.storeService.getStorData().subscribe((res) => {
      this.storeData = res;
    });
  }
  addToCart(item: Product): void {
    const obj = this.cartData.find(o => o.name === item.name);
    if (obj) {
      const index = this.cartData.indexOf(obj);
      this.cartData[index].count += 1;
    } else {
      item.count = 1;
      this.cartData.push(item);
    }
    this.cartTotal += +item.price;
    this.cartLength += 1;
  }
  openCart(): void {
    const dialogRef = this.dialog.open(CartComponent, {
      width: '500px',
      maxHeight: '500px',
      data: { cartData: this.cartData, cartTotal: this.cartTotal, cartLength: this.cartLength }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
