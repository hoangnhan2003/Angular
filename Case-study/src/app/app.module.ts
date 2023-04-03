import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './containerFurama/container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerCraeteComponent } from './customer/customer-craete/customer-craete.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    FooterComponent,
    ContainerComponent,
    CustomerCraeteComponent,
    CustomerEditComponent,
    CustomerListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    ContractCreateComponent,
    ContractEditComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
