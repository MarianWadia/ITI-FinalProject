import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  allUsers:any[] = [];

  constructor(private userService:UserService) { }
   
  ngOnInit(): void {
    this.userService
    .getAllUsers().subscribe({
      next:(data)=>{
        this.allUsers=data
      }
    })
  }
}
