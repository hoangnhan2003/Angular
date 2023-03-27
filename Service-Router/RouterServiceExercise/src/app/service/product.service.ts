import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll(): Product[] {
    return this.products;
  }

  saveProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(productId) {
    const newProducts = this.products.filter(product => product.id !== productId);
    console.log(newProducts);
    this.products = newProducts;
  }

  updateProduct(newProduct: Product): void {
    for (const product of this.products) {
      if (product.id === newProduct.id) {
        product.name = newProduct.name;
        product.price = newProduct.price;
        product.description = newProduct.description;
      }
    }
  }

  getProductById(productId): Product {
    console.log('Du lieu nhan dc: ' + productId);
    const a = this.products.filter(product => product.id === Number(productId))[0];
    return a;
  }
}
