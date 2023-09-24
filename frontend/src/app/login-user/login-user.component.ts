import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  credentials = {
    email: '',
    password: '',
  };
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Logged In successful', response);
  
        // Show a success message using MatSnackBar
        this.snackBar.open('Login successful', 'Close', {
          duration: 3000, // The message will be shown for 3 seconds
        });
  
        if(response.isAdmin===true){
          this.router.navigate(['/home']);
        }else{
          this.router.navigate(['/userHome']);
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
  }
}
