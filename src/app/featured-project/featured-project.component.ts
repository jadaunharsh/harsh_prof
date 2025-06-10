import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-project',
  imports: [],
  templateUrl: './featured-project.component.html',
  styleUrl: './featured-project.component.css'
})
export class FeaturedProjectComponent {
  featureCards = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
      cardTitle: 'Card title 1',
      cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
      cardTitle: 'Card title 2',
      cardText: 'This is a short card.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
      cardTitle: 'Card title 3',
      cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
      cardTitle: 'Card title 4',
      cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    }
  ];
}
