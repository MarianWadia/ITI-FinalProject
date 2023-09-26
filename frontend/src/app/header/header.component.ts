import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId!: string|null;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Get the userId from the UserService
    this.userService.userId$.subscribe(userId => {
      this.userId = userId;
    });
  }
  navigateToHome(): void {
     this.router.navigate(['/home', this.userId]);
   }

  navigateToUsers(): void {
    this.router.navigate(['/users', this.userId]);
  }

  navigateToProducts(): void {
    this.router.navigate(['/products', this.userId]);
  }
  navigateToCart(): void {
    this.router.navigate(['/cart', this.userId]);
  }
}
