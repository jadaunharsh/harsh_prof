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
  userData: any;

  // contributions: { [date: string]: ContributionDay } = {};
  // dates: string[] = [];


  constructor(private gitApiCallService: GitApiCallService) {
    // this.gitApiCallService.getUserData(this.githubUsername).then((data: any) => {
    //   this.userData = data;
    //   console.log(this.userData);
    // });

    // this.gitApiCallService.getContributions(this.githubUsername).then((data: any) => {
    //   this.contributions = data;
    //   console.log(this.contributions);
    //   this.dates = Object.keys(this.contributions).sort();
    //   console.log(this.dates);
    // });
  }

}

// interface ContributionDay {
//   count: number;
//   color: string;
// }