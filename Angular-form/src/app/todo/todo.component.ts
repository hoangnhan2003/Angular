import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validator} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {Router} from '@angular/router';
// tslint:disable-next-line:variable-name


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo: FormGroup;

  constructor(private todoService: TodoService, private router: Router) {
    this.todo = new FormGroup({
      id: new FormControl(''),
      complete: new FormControl(''),
      content: new FormControl('')
    });
    this.getAll();
  }

  getAll(): void {
    this.todoService.getAll().subscribe(next => {
      console.log(next);
      this.todos = next;
    });
  }

  ngOnInit(): void {

  }

  // change() {
  //   const value = this.content.value;
  //   if (value) {
  //     const todo: Todo = {
  //       id: _id++,
  //       content: value,
  //       complete: false
  //     };
  //     this.todos.push(todo);
  //     this.content.reset();
  //   }
  // }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  addTodo(): void {
    console.log(this.todo.value);
    this.todoService.addTodo(this.todo.value).subscribe(next => {
      this.getAll();
    });
  }

  deleteTodoById(id: number) {
    console.log(id);
    this.todoService.deleteById(id).subscribe(next => {
      this.getAll();
    });
  }
}
