import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  isSuccess = false;
  constructor(private productService: ProductService) {}

  onSubmit(form: any) {
    // Gather form data and call the product service to add a new product
    const productData = {
      title: form.productName,
      price: form.productPrice,
      description: form.productDescription,
      category: form.productCategory,
      image : form.image
    };

    this.productService.addProduct(productData).subscribe({
      next:(data)=>{
        console.log(data)
        this.isSuccess = true;
      }
    })
  }
  
}



  
