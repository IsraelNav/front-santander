import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

  public title: string = 'Crear Nuevo Producto';
  public myform!: FormGroup;

  constructor(private formBuilder:FormBuilder, private productService:ProductService) { }

  ngOnInit(): void {
    this.clearForm();
  }


  save(){

    if (this.myform.invalid) {
      return
    }else{
      this.productService.createProduct(this.myform.value)
      .subscribe(product => {
        this.clearForm();
      });
    }
  }

  clearForm(){
     this.myform = this.formBuilder.group({
      name: ['',[Validators.required],[]],
      price: [0,[Validators.required],[]],
      description: ['',[],[]],
      mail: ['',[Validators.required, Validators.email],[]]
    })
  }
}
