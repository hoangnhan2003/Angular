import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   products: Product[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  saveProduct(product: Product): Observable<any> {
    return this.httpClient.post<Product>('http://localhost:3000/products', product);
  }

  deleteProduct(productId: number): Observable<any> {
    // const newProducts = this.products.filter(product => product.id !== productId);
    // console.log(newProducts);
    // this.products = newProducts;
    return this.httpClient.delete('http://localhost:3000/products/' + productId);
  }

  updateProduct(newProduct: Product): Observable<any> {
    // for (const product of this.products) {
    //   if (product.id === newProduct.id) {
    //     product.name = newProduct.name;
    //     product.price = newProduct.price;
    //     product.description = newProduct.description;
    //   }
    // }
    return this.httpClient.put('http://localhost:3000/products/' + newProduct.id, newProduct);
  }

  getProductById(productId: number): Observable<Product> {
    // console.log('Du lieu nhan dc: ' + productId);
    // const a = this.products.filter(product => product.id === Number(productId))[0];
    // return a;
    return this.httpClient.get<Product>('http://localhost:3000/products/' + productId);
  }
}
