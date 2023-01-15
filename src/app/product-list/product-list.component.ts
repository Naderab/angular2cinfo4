import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title : string = "Bonjour 2 CINFO 4"
  quantity:number=1
  constructor() { }

  ngOnInit(): void {
  }
  test(){
    console.log("button works !")
    this.title = "Button works !"
  }

}
