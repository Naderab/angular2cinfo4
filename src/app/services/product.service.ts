import { Injectable } from '@angular/core';
import { Product } from '../Entity/product';

@Injectable({
  providedIn:'root'
})
export class ProductService {
  productListService:Product[]=[
    {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  constructor() { }
  ajouterProduit(produit:Product){
    this.productListService.push(produit);
  }
}
