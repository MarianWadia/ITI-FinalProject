
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any;
  isSuccess =false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  onSubmit(form: any) {
    // Gather form data and call the product service to add a new product
    const productData = {
      title: form.productName,
      price: form.productPrice,
      description: form.productDescription,
      category: form.productCategory,
      image : form.image
    };

    this.productService.updateProduct(productData).subscribe({
      next:(data)=>{
        console.log(data)
        this.isSuccess = true;
      }
    })
  }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    console.log(productId)
    this.productService.getProductById(productId)
      .subscribe((product) => {
        this.product = product;
      });
  }

  
}
