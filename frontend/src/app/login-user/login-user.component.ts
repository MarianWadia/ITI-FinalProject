import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  userId!: string | null;
  credentials = {
    email: '',
    password: '',
  };
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router, private userService: UserService) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Logged In successful', response);
  
        // Show a success message using MatSnackBar
        this.snackBar.open('Login successful', 'Close', {
          duration: 3000, // The message will be shown for 3 seconds
        });
  
        if(response.isAdmin===true){
          this.router.navigate([`/home/${response._id}`]);
          this.userService.setUserId(`${response._id}/admin`);
        }else{
          this.router.navigate([`/userHome/${response._id}`]);
          this.userService.setUserId(response._id);
        }      
      },
      (error) => {
        // Handle error and show an error message if registration fails
        console.error('Registration error', error);
  
        // Show an error message using MatSnackBar
        this.snackBar.open('Login failed', 'Close', {
          duration: 3000, // The message will be shown for 3 seconds
          panelClass: ['error-snackbar'], // Optional CSS class for styling
        });
      }
    );
    this.userId = this.userService.getUserId();
    console.log(this.userId);
  }
}
