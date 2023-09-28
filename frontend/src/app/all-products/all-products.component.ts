import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CartService } from '../cart-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  allproducts:any[]=[]
  totalProducts:number =20
  pageSize =5;
  currentPage:number =1
  userId!: string|null;



  constructor(private produServ:ProductService, private userService: UserService, private router: Router, 
    private cartService: CartService, private snackBar: MatSnackBar ){}

  ngOnInit(){
    this.userService.userId$.subscribe(userId => {
      this.userId = userId;
    });

    this.produServ.getAllProduct().subscribe({next:(data)=>{
      console.log(data);
      this.allproducts = data
      console.log(this.allproducts)
      this.totalProducts=data.totalProducts
    }})
  }

  changePage(pageData:PageEvent){
    this.currentPage = pageData.pageIndex+1
    this.produServ.getAllProduct().subscribe({next:(data)=>{
      console.log(data);
      this.allproducts = data.products
      this.totalProducts=data.totalProducts
    }})
  }

  navigateToProductDetails(productId: string): void {
    this.router.navigate(['/productDetails', productId , this.userId]);
  }

  navigateToCart(productId: string): void {

    this.cartService.addToCart(this.userId!, productId!, 1).subscribe(
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
          panelClass: ['error-snackbar'], // Optional CSS class for styling
        });
      });
  }
}
