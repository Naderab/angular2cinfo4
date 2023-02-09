import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Entity/product';

@Injectable({
  providedIn: 'root'
})
export class ProductConsumerService {
  apiUrl:string="http://localhost:3000/product"
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.apiUrl);
  }
  addProduct(product:Product){
    return this.http.post(this.apiUrl, product)
  }
  updateProduct(product:Product){
    return this.http.put(this.apiUrl+"/"+product.id, product)
  }
  deleteProduct(id:any){
    return this.http.delete(this.apiUrl+"/"+id)
  }
}
