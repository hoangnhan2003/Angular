import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryPageComponentComponent} from './dictionary-page-component/dictionary-page-component.component';
import {DictionaryDetailComponentComponent} from './dictionary-detail-component/dictionary-detail-component.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';


const routes: Routes = [
  {path: '', component: DictionaryPageComponentComponent},
  {path: 'info/:text', component: DictionaryDetailComponentComponent},
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit/:productId',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
