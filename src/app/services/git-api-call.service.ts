import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitApiCallService {

  constructor(private http: HttpClient) {

  }

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

  public getMicrosoftLearnData(): Observable<any> {
    return this.http.get("../../assets/js/microsoft-learning-profile-data-24052025.json");
  }

}
