import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { enviroment } from '../../../enviroment';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/Response';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Response>{
    return this.http.get<Response>(`${enviroment.url_base}/product`);
  }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${enviroment.url_base}/product`, product);
  }

  updateProduct(id:String,product: Product): Observable<Product>{
    return this.http.put<Product>(`${enviroment.url_base}/product/${id}`, product);
  }

  deleteProduct(id: string): Observable<Product>{
    return this.http.delete<Product>(`${enviroment.url_base}/product/${ id }`);
  }
}
