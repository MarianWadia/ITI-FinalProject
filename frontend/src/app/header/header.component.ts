import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId!: string|null;
  isAdmin=false;
  constructor(private userService: UserService, private router: Router, public routerService: RouterService) { }

  ngOnInit(): void {
    // Get the userId from the UserService
    this.userService.userId$.subscribe(userId => {
      this.userId = userId;
      if(this.userId?.includes('/admin')){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
    });
  }
  navigateToAdminHome(): void {
     this.router.navigate(['/home', this.userId]);
   }

  navigateToUsers(): void {
    this.router.navigate(['/users', this.userId]);
  }

  navigateToProducts(): void {
    this.router.navigate(['/products', this.userId]);
  }

  navigateToUserHome(): void {
    this.router.navigate(['/userHome', this.userId]);
  }

  navigateToAllProducts(): void {
    this.router.navigate(['/allProducts', this.userId]);
  }
  
  navigateToCart(): void {
    this.router.navigate(['/cart', this.userId]);
  }

  navigateToAbout(): void {
    this.router.navigate(['/about', this.userId]);
  }
  navigateToLogin(): void {
    this.router.navigate(['/userLogin']);
  }
}
