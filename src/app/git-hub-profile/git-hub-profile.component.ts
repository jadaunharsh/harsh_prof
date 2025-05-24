import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GitApiCallService } from '../services/git-api-call.service';


@Component({
  selector: 'app-git-hub-profile',
  imports: [CommonModule],
  templateUrl: './git-hub-profile.component.html',
  styleUrl: './git-hub-profile.component.css'
})
export class GitHubProfileComponent {

  githubUsername: string = 'jadaunharsh'
  defaultUsername: string = 'jadaunharsh'
  msLearnData: any;
  userData: any;

  constructor(private gitApiCallService: GitApiCallService) {
    this.gitApiCallService.getUserData(this.githubUsername).then((data: any) => {
      this.userData = data;
    });

    this.gitApiCallService.getMicrosoftLearnData().subscribe(data => {
      this.msLearnData = data;
    });
  }

}
