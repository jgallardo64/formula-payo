import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/shared/services/teams.service';

@Component({
  selector: 'app-drivers-teams',
  templateUrl: './drivers-teams.component.html',
  styleUrls: ['./drivers-teams.component.scss']
})
export class DriversTeamsComponent implements OnInit {

  teams = [];

  constructor(
    private teamsService: TeamsService
  ) { }

  ngOnInit() {
    this.teamsService
    .getAll()
    .subscribe((response) => {
      this.teams = [];
      response.forEach(element => {
        this.teams.push({
          id: element.payload.doc.id,
          data: element.payload.doc.data()
        });
      });
    });
  }

}
