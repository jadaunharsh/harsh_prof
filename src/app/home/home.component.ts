import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { GitHubProfileComponent } from "../git-hub-profile/git-hub-profile.component";
import { TypoContentComponent } from "../typo-content/typo-content.component";
import { FeaturedProjectComponent } from "../featured-project/featured-project.component";

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, GitHubProfileComponent, TypoContentComponent, FeaturedProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
