import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoInfoComponent} from './todo-info/todo-info.component';


const routes: Routes = [
  {
    path: 'todo/list', component: TodoComponent
  }
  ,
  {
    path: 'todo/edit/:id', component: TodoInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
