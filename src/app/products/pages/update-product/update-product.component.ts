import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  public title: string = 'Editar Producto';
  // public product:Product = {
  //   _id: '',
  //   name: '',
  //   price: 0,
  //   description: '',
  //   mail: '',
  //   date: new Date
  // };
  public myform!: FormGroup;
  public product: any;
  public list:Product[] = [];
  public idProduct:string = '';
  constructor(private formBuilder:FormBuilder, private productService:ProductService
    , private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idProduct = params['id'];
      this.list = JSON.parse(localStorage.getItem('products')!);
      this.product = this.list.filter(p => p._id === this.idProduct);

      this.myform = this.formBuilder.group({
        name: [this.product[0].name,[Validators.required],[]],
        price: [this.product[0].price,[],[]],
        description: [this.product[0].description,[],[]],
        mail: [this.product[0].mail,[],[]]
      })
    });

  }

  update(){
    if (this.myform.invalid) {
      return
    }else{
      this.productService.updateProduct(this.idProduct,this.myform.value)
      .subscribe(product => {
        console.log('Product Update: ', product);
      });
    }
  }
}
