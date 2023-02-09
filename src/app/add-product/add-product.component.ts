import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Entity/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  ajouter(){
    this.product.id = '1';
    this.product.like = 0;
    this.service.ajouterProduit(this.product)
    this.router.navigateByUrl('/products')
    console.log(this.product)
  }
}
