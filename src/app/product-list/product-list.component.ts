import { Component, OnInit } from '@angular/core';
import { Product } from '../Entity/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title : string = "Bonjour 2 CINFO 4"
  quantity:number=1
  productList:Product[]=[
    {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
    
  constructor() { }

  ngOnInit(): void {
  }
  test(){
    console.log("button works !")
    this.title = "Button works !"
  }

  Buy(id:string) {
    // for(let i=0;i<this.productList.length;i++)
    // {
    //   if(this.productList[i].id == id){
    //     this.productList[i].quantity--
    //   }
    // }

    this.productList.map(p=>p.id == id&& p.quantity--)
  }
  Like(id:string) {
    for(let i=0;i<this.productList.length;i++)
    {
      if(this.productList[i].id == id){
        this.productList[i].like++
      }
    }
  }
}
