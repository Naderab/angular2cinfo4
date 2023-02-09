import { Component, OnInit } from '@angular/core';
import { Product } from '../Entity/product';
import { ProductService } from '../services/product.service';
import { ProductConsumerService } from '../services/product-consumer.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title : string = "Bonjour 2 CINFO 4"
  quantity:number=1
  productListComponent:Product[]=[]
    
  constructor(private service:ProductService,private productConsumer:ProductConsumerService) { }

  ngOnInit(): void {
    this.productConsumer.getProducts().subscribe({
    next:(data)=>this.productListComponent=data,
    error:(error)=>console.log(error),
    complete:()=>console.log("I m finished")
  })
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

    this.productListComponent.map(p=>p.id == id&& p.quantity--)
  }
  Like(id:string) {
    for(let i=0;i<this.productListComponent.length;i++)
    {
      if(this.productListComponent[i].id == id){
        this.productListComponent[i].like++
      }
    }
  }
  delete(id:any){
    this.productConsumer.deleteProduct(id).subscribe({
      next:()=>this.productListComponent=this.productListComponent.filter((p)=>p.id != id),
      error:(error)=>console.log(error)
    }
    )
  }
}
