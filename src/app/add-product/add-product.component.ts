import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Entity/product';
import { ProductConsumerService } from '../services/product-consumer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  id!:any;
  constructor(private service:ProductService,private router:Router,private consumerService:ProductConsumerService,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    if(this.id != null) {
      this.consumerService.getProductById(this.id).subscribe(
        {next:(data)=>this.product=data})
    }
  }

  ajouter(){
    //this.product.id = '1';
    this.product.like = 0;
    //this.service.ajouterProduit(this.product)
    if(this.id != null) {
      this.consumerService.updateProduct(this.product).subscribe({
        next:()=>this.router.navigateByUrl('/products'),
        error:(error)=>console.log(error),
        complete:()=>console.log("I m finished")
      });
    }else {
      this.consumerService.addProduct(this.product).subscribe({
        next:()=>this.router.navigateByUrl('/products'),
        error:(error)=>console.log(error),
        complete:()=>console.log("I m finished")
      });
    }
   
    //console.log(this.product)
  }
}
