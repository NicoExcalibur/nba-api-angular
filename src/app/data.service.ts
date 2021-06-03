import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // get teams
  getTeams() {
    return this.http.get('https://www.balldontlie.io/api/v1/teams');
  }
}
