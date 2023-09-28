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
import {AllProductsComponent} from "./all-products/all-products.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent},
  { path: 'userRegister', component: RegisterUserComponent },
  { path: 'userLogin', component: LoginUserComponent },
  {path: 'userHome/:userId', component: UserHomeComponent},
  { path: 'cart/:userId', component: CartComponent },
  { path: 'cart/:userId/:productId', component: CartComponent },
  {path: 'about/:userId', component: AboutComponent},
  {path: 'allProducts/:userId', component: AllProductsComponent},
  {path: 'productDetails/:productId/:userId', component: ProductDetailsComponent},
  { path: 'home/:userId', component: HomeAdminComponent },
  { path: 'products/:userId', component: ProductComponent },
  { path: 'addproduct/:userId', component: AddProductComponent },
  { path: 'updateproduct/:userId/:id', component: EditProductComponent },
  { path: 'users/:userId', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
