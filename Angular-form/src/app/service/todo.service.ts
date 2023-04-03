import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../todo';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
  }

  addTodo(event: any): Observable<any> {
    return this.httpClient.post<any>(' http://localhost:3000/todos', event);
  }

  findById(value: number): Observable<Todo> {
    return this.httpClient.get(' http://localhost:3000/todos/' + value);
  }

  deleteById(value: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/todos/' + value);
  }

  update(todo: any): Observable<any> {
    const url = `http://localhost:3000/todos/` + todo.id;
    return this.httpClient.put(url, todo);
  }
}
