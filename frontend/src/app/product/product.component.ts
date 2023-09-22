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
        console.log(this.allProducts)
      }
    })
  }

  deleteProduct(productId: number) {
    console.log(typeof(productId))
    this.prodService.deleteProduct(productId).subscribe({
      next: () => {
        const deletedIndex = this.allProducts.findIndex(product => product.id === productId);
  
        if (deletedIndex !== -1) {
          this.allProducts.splice(deletedIndex, 1);
        } else {
          console.error('Product not found in the list.');
        }
      },
      error: (error) => {
        console.error('Error deleting product:', error);
      }
    });
  }
  

}
