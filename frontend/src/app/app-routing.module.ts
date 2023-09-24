import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProductComponent } from './product/product.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'home', component: HomeAdminComponent },
  { path: '', component: HomeAdminComponent },
  { path: 'products', component: ProductComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'updateproduct/:id', component: EditProductComponent },
  { path: 'users', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
