import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTeams().subscribe((response: any) => {
      console.log(response);
    });
  }
}
