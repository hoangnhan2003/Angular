import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterFormComponent} from './register-form/register-form.component';
import { LoginComponentComponent } from './login-component/login-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RegisterFormComponent,
    LoginComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
