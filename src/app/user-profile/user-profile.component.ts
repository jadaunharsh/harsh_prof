import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    photoUrl: new FormControl(''),
    roles: new FormControl(''),
  });
  constructor(private userService: UserService, private helperService: HelperService) {
    // Initialize the form with existing user data if available
    this.userService.getUserProfile().subscribe({
      next: (data) => {
        console.log('User profile data:', data);
        if (data) {
          this.profileForm.patchValue({
            firstName: data.firstname,
            lastName: data.lastname,
            email: data.email,
            photoUrl: data.photoUrl,
            roles: data.roles // Assuming roles is an array
          });
          this.helperService.showSuccess("User profile loaded successfully");
        }
      },
      error: (error) => {
        console.error('Error fetching user profile:', error);
        this.helperService.showError(error.error ?? 'Failed to load user profile');
      }
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
    // Here you can handle the form submission, e.g., send the data to a server
    // this.userService.updateUserProfile(this.profileForm.value).subscribe(response => {
    //   console.log('Profile updated successfully', response);
    // });
    this.profileForm.reset(); // Reset the form after submission
  }
}
