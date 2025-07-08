import { Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TokenService } from './services/token.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, HeaderComponent, FooterComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck {
  title = 'harsh_prof';
  isLoggedIn: boolean = false;
  registerUser: boolean = false;
  loading: boolean = false;

  constructor(private tokenService: TokenService) {
  }

  ngDoCheck(): void {
    this.isLoggedIn = this.tokenService.getIsLoggedIn() === 'true';
    this.registerUser = localStorage.getItem('registerUser') === 'true';
  }

}
