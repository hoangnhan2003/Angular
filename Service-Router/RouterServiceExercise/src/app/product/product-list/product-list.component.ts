import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.getALl();
  }

  ngOnInit(): void {
    console.log('OnInit');

  }

  getALl(): void {
    // this.productService.getAll().subscribe(next => {
    //   this.products = next;
    // });

    this.productService.getAll().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }


  delete(id: number) {
    this.productService.deleteProduct(id);
    this.getALl();
  }
}
