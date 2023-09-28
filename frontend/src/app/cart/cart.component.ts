import { Component,  OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  userId!: string | null;
  cartItems: any[] = [];
  products: any[] = [];
  subtotal: number = 0;
  deliveryFees: number = 5;
  total: number = 0 ;
  showElement = false;

constructor(private route: ActivatedRoute, private cartService: CartService, private poductService: ProductService, private userService: UserService) {}

  ngOnInit(): void {
    // Get the userId from the route parameters
    this.userService.userId$.subscribe(userId => {
      this.userId = userId;
    });
    if(!this.userId){
      this.route.paramMap.subscribe(params => {
        this.userId = params.get('userId');
    }
    )}else{
        this.getUserCart();
      }
  }

  getUserCart(): void {
    if (this.userId) {
      this.cartService.getUserCart(this.userId).subscribe(
        (response) => {
          this.toHandleResponse(response);
          // console.log(response);
        },
        (error) => {
          console.error('Error fetching user cart:', error);
        }
      );
    }
  }

  // Implement methods to add, update, and remove items from the cart
  removeFromCart(productId: string): void{
    this.cartService.removeItem(this.userId!, productId).subscribe(
      (response)=>{
        this.toHandleResponse(response);
    },(error) => {
        console.error('Error deleting from cart:', error);
    });
  }

  updateQuantity(productId: string, quantity: number): void{
    this.cartService.updateQuantity(this.userId!, productId, quantity).subscribe(
      (response)=>{
        this.toHandleResponse(response);
    },(error) => {
        console.error('Error editing quantity from cart:', error);
    });
  }

  toHandleResponse(response: any) {
    this.cartItems = response.items; // Assuming the API returns cart data in the response
    this.products = [];
    this.subtotal= 0;
    this.total = 0;
    if(this.cartItems && this.cartItems.length>0){
      this.showElement=true;
      this.cartItems.forEach(item => {
        this.poductService.getProductById(item.productId).subscribe(
          (response) => {
            this.products.push({...response, quantity: item.quantity, productId: item.productId})
            this.subtotal+=response.price*item.quantity;
            this.subtotal = Math.floor(this.subtotal)
            this.total = Math.floor(this.subtotal+this.deliveryFees)
            console.log(this.products);
            
          }, (error) => {
            console.error('Error fetching products:', error);
          })
      });
    }else{
      this.showElement=false;
    }
  }
}
