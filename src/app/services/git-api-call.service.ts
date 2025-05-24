import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitApiCallService {

  getUserData(githubUsername: string) {
    return fetch(`https://api.github.com/users/${githubUsername}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  // getContributions(githubUsername: string) {
  //   return fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .catch(error => {
  //       console.error('There was a problem with the fetch operation:', error);
  //     });
  // }


}
