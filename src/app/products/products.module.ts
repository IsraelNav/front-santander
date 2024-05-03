import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListProductComponent } from './components/list-product/list-product.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { RouterModule } from '@angular/router';
import { ChartProductComponent } from './components/chart-product/chart-product.component';



@NgModule({
  declarations: [
    HomepageComponent,
    ListProductComponent,
    NewProductComponent,
    UpdateProductComponent,
    ChartProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HomepageComponent,
    NewProductComponent,
    UpdateProductComponent
  ]
})
export class ProductsModule { }
