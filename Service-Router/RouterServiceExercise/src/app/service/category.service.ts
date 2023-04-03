import {Injectable} from '@angular/core';
import {Category} from '../category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:3000/categories');
  }

  saveCategory(category: Category): Observable<any> {
    return this.httpClient.post<Category>('http://localhost:3000/categories', category);
  }

  findById(id: number): Observable<Category> {
    // return this.categories.find(category => category.id === id);
    return this.httpClient.get<Category>('http://localhost:3000/categories/' + id);
  }

  deleteCategory(id: number): Observable<any> {
    // this.categories = this.categories.filter(category => {
    //   return category.id !== id;
    // });
    return this.httpClient.delete('http://localhost:3000/categories/' + id);
  }

  updateCategory(id: number, category: Category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories[i] = category;
      }
    }
  }
}

