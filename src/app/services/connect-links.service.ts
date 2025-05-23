import { Injectable } from '@angular/core';
import { ConnectLinks } from '../interfaces/ConnectLinks';

@Injectable({
  providedIn: 'root'
})
export class ConnectLinksService {

  resumeUrl = 'assets/resume/Harsh_Pratap_Singh.pdf';
  contactEmail = 'mailto:jadaunharsh92@gmail.com';
  contactLinkedIn = 'https://www.linkedin.com/in/harsh-pratap-singh-355a55b2/';
  contactGitHub = 'https://github.com/jadaunharsh';

  constructor() { }
  getConnectLinks(): ConnectLinks {
    return {
      resumeUrl: this.resumeUrl,
      contactEmail: this.contactEmail,
      contactLinkedIn: this.contactLinkedIn,
      contactGitHub: this.contactGitHub
    };
  }

}
