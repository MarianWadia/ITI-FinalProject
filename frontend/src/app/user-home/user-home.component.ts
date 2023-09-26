import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  userId!: string | null;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    // Set the userId in the UserService (if not already set)
    if (!this.userService.getUserId()) {
      this.route.paramMap.subscribe(params => {
        const userId = params.get('userId');
        this.userService.setUserId(userId!);
      });
    }

    // Get the userId from the UserService
    this.userId = this.userService.getUserId();

    // Now you can use this.userId as needed within your component
    console.log(this.userId);
  }
}
