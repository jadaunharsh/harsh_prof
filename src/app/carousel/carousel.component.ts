import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides = [
    {
      // image: '../../assets/images/carousal/pexels-abby-chung.jpg',
      image: '/assets/images/carousal/pexels-miami.jpg',
      title: '🌐 Modern Web Applications',
      description: 'Building responsive and scalable web apps using .NET Core and Angular.',
      buttonText: 'View My Projects'
    },
    {
      // image: '../../assets/images/carousal/pexels-igor-starkov.jpg',
      image: '/assets/images/carousal/pexels-scottwebb.jpg',
      title: '⚡ Fast & Secure APIs',
      description: 'Designing RESTful APIs with secure, high-performance .NET Web APIs.',
      buttonText: 'Explore My APIs'
    },
    {
      // image: '../../assets/images/carousal/pexels-vlasceanu.jpg',
      image: '/assets/images/carousal/pexels-tubiderler.jpg',
      title: '🎨 Engaging User Interfaces',
      description: 'Crafting elegant, dynamic UI with Angular and a strong focus on UX.',
      buttonText: 'See UI in Action'
    }
  ];
}


