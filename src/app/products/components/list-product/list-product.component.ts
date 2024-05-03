import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  @Input()
  public listProduct: Product[] = [];

  @ViewChild('txtTag')
  public tag!: ElementRef<HTMLInputElement>;

  public product: any;
  public list: Product[] = [];

  constructor(private productService: ProductService) { }

  delete(id: string): void {

    Swal.fire({
      title: 'Error!',
      text: '¿Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      confirmButtonText: 'Eliminar',
      showCancelButton: true
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.productService.deleteProduct(id)
            .subscribe(product => {
              Swal.fire('Eliminado exitosamente', '', 'success');
              this.productService.getAll().subscribe(resp => {
                this.listProduct = resp.data;
              });
            });
        }
      });
  }

  findById(): void {
    const newTag = this.tag.nativeElement.value;
    if (newTag) {
      this.list = JSON.parse(localStorage.getItem('products')!);
      this.listProduct = this.list.filter(p => p._id === newTag);
    } else {
      this.list = JSON.parse(localStorage.getItem('products')!);
      this.listProduct = this.list;
    }
  }
}
