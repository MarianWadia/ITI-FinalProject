import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProductComponent } from './product/product.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserComponent } from './user/user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CartComponent } from './cart/cart.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: 'home/:userId', component: HomeAdminComponent },
  { path: '', component: RegisterUserComponent},
  {path: 'userHome/:userId', component: UserHomeComponent},
  { path: 'products/:userId', component: ProductComponent },
  { path: 'addproduct/:userId', component: AddProductComponent },
  { path: 'updateproduct/:userId/:id', component: EditProductComponent },
  { path: 'users/:userId', component: UserComponent },
  { path: 'userLogin', component: LoginUserComponent },
  { path: 'userRegister', component: RegisterUserComponent },
  { path: 'cart/:userId', component: CartComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
