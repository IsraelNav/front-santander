import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './products/pages/homepage/homepage.component';
import { NewProductComponent } from './products/pages/new-product/new-product.component';
import { UpdateProductComponent } from './products/pages/update-product/update-product.component';
import { ChartProductComponent } from './products/components/chart-product/chart-product.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path :'newProduct', component: NewProductComponent},
  { path: 'updateProduct/:id', component: UpdateProductComponent},
  { path:'chart', component: ChartProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
