import { Component, OnInit } from '@angular/core';
// import AOS from 'aos';
import { ConnectLinksService } from '../services/connect-links.service';
import { ConnectLinks } from '../interfaces/ConnectLinks';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  links: ConnectLinks;

  constructor(private connectLinks: ConnectLinksService) {
    this.links = connectLinks.getConnectLinks();
  }

  ngOnInit(): void {
    // AOS.init();
  }

  summary = `
    I'm Harsh Pratap Singh, a full-stack developer with over 6 years of experience in building scalable and domain-driven applications — especially in the healthcare, infrastructure, and energy sectors. 
    Passionate about solving real-world problems through clean code, strong architecture, and continuous learning.
  `;

  highlights = [
    'Over 6 years of experience in full-stack development',
    // 'Currently working at DH Healthcare (Dedalus Group) as a Product Developer',
    'Hands-on with Angular 16, ASP.NET Core, Docker, Azure DevOps, and CI/CD pipelines',
    'Previously contributed to infrastructure mapping and automation tools using Postgres, OpenLayers, and Geoserver',
    'Comfortable across backend, frontend, and DevOps environments',
    'Strong focus on maintainability, performance, and team collaboration'
  ];

  skills = [
    'Angular', 'ASP.NET Core', 'C#', 'SQL Server', 'PostgreSQL',
    'Entity Framework Core', 'ADO.NET', 'Docker', 'Azure DevOps',
    'Git', 'Swagger', 'Jira', 'Python', 'Excel VBA'
  ];

  personalQuote = `I believe great code comes from a mix of curiosity, discipline, and continuous feedback.`;
  hobbies = [
    'Reading books on technology and philosophy',
    'Exploring new programming languages and frameworks',
    'Contributing to open-source projects',
    'Playing chess and solving puzzles'
  ];
}
