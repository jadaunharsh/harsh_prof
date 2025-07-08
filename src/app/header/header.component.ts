import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterContentInit {
  siteName: string = "< Harsh Jadaun />"
  userName: string = ""; // Default value, can be updated based on login state
  Categories: string[] = []; // Array to hold categories fetched from the service
  constructor(private router: Router,
    private tokenService: TokenService, private blogService: BlogService) {

  }
  ngOnInit(): void {
    this.blogService.getGetegories().subscribe({
      next: (data) => {
        // console.log('Categories:', data);
        this.Categories = data; // Store categories for use in the template
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }
  ngAfterContentInit(): void {
    this.userName = localStorage.getItem('userName')!; // Update userName from local storage
  }

  Logout() {
    localStorage.clear(); // Clear all local storage items
    this.tokenService.removeAll(); // Clear all session storage items
    this.router.navigate(['/login']);
  }

  GetProfile() {
    this.router.navigate(['/user-profile']);
  }

  GetCategory(category: string) {
    this.router.navigate(['/blogs', category]); // Navigate to blogs with the selected category
  }

}
