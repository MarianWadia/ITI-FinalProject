import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allProducts:any[] = [];

  constructor(private prodService:ProductService) { }
  
  ngOnInit(): void {
    this.prodService
    .getAllProduct().subscribe({
      next:(data)=>{
        this.allProducts=data
      }
    })
  }

}
