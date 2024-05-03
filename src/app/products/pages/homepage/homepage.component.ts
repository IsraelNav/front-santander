import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  public listProduct: Product[] = [];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getAll().subscribe(resp => {
        const { data } = resp;

        this.listProduct = data;
        localStorage.setItem('products', JSON.stringify(this.listProduct));
        console.log(this.listProduct);
    });
  }
}
