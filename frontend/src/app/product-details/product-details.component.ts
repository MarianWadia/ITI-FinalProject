import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  userId!: string|null;
  product: any = {};
  productId!: string|null;

  constructor(private produServ:ProductService, private userService: UserService, private router: Router, private route:ActivatedRoute, 
    private cartService: CartService, private snackBar: MatSnackBar){}

  ngOnInit(){
    this.userService.userId$.subscribe(userId => {
      this.userId = userId;
    });
    this.productId = this.route.snapshot.paramMap.get('productId')!;
    this.produServ.getProductById(this.productId).subscribe({
      next: (data)=>{
        this.product = data
      }
    })
  }


  navigateToProductDetails(): void {
    this.router.navigate(['/productDetails', this.productId , this.userId]);
  }

  navigateToCart(): void {
    this.cartService.addToCart(this.userId!, this.productId!, 1).subscribe(
      (response)=>{
        if(response){
          this.snackBar.open('Item Added To Cart', 'Close', {
            duration: 3000, // The message will be shown for 3 seconds
          });
          console.log(response); 
        }
      },(error) => {
        console.error('Error adding to cart:', error);
        this.snackBar.open('Failed added to cart', 'Close', {
          duration: 3000, // The message will be shown for 3 seconds
          panelClass: ['error-snackbar'], 
        });
      });
  }
}
