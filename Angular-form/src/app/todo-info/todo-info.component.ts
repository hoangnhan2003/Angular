import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoComponent} from '../todo/todo.component';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    complete: new FormControl(''),
    content: new FormControl('')
  });

  todo: Todo = {id: 0, complete: false, content: ''};

  constructor(private todoService: TodoService, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.paramMap.subscribe(success => {
      // tslint:disable-next-line:radix
      const id = Number.parseInt(success.get('id'));
      // tslint:disable-next-line:prefer-const
      console.log(id);
      // @ts-ignore
      console.log(success);
      this.todoService.findById(id).subscribe(next => {
          console.log(next);
          this.todo = next;
          this.todoForm.patchValue({
            id: this.todo.id,
            content: this.todo.content,
            complete: this.todo.complete
          });
        }
      );


    });
  }

  ngOnInit(): void {
  }

  update() {
    this.todoService.update(this.todoForm.value).subscribe();
    this.router.navigateByUrl('/todo/list');
  }
}
