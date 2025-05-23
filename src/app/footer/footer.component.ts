import { Component } from '@angular/core';
import { ConnectLinksService } from '../services/connect-links.service';
import { ConnectLinks } from '../interfaces/ConnectLinks';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  links: ConnectLinks;

  constructor(private connectLinks: ConnectLinksService) {
    this.links = connectLinks.getConnectLinks();
  }
}
