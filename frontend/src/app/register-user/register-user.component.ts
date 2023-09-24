import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  user = {
    firstName: '',
    secondName: '',
    userName: '',
    email: '',
    password: '',
  };
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Registration successful', response);
  
        // Show a success message using MatSnackBar
        this.snackBar.open('Login successful', 'Close', {
          duration: 3000, // The message will be shown for 3 seconds
        });
        this.router.navigate(['/userLogin']);
        
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
