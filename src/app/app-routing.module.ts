import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:'products',component:ProductListComponent},
  {path:'users',component:UserComponent},
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"product/:id",component:ProductDetailsComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"updateProduct/:id",component:AddProductComponent},
  {path:"tdf",component:TemplateDrivenFormComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
