import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";
import { HomeComponent } from "./component/home/home.component";
import { AdminHomeComponent } from "./component/admin/home/home.component";
import { authGuard } from "./guard/auth.guard";
import { AdminProductComponent } from "./component/admin/product/product.component";
import { AdminOrderComponent } from "./component/admin/order/order.component";
import { AdminUserComponent } from "./component/admin/user/user.component";
import { AdminCategoryComponent } from "./component/admin/category/category.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: HomeComponent, canActivate: [authGuard] },
  { path: "admin", component: AdminHomeComponent, canActivate: [authGuard] },
  {
    path: "admin/books",
    component: AdminProductComponent,
    canActivate: [authGuard],
  },
  {
    path: "admin/orders",
    component: AdminOrderComponent,
    canActivate: [authGuard],
  },
  {
    path: "admin/users",
    component: AdminUserComponent,
    canActivate: [authGuard],
  },
  {
    path: "admin/category",
    component: AdminCategoryComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
