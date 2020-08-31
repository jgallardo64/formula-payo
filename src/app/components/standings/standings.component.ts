import { Component, OnInit } from '@angular/core';
import { DriverStandingsService } from 'src/app/shared/services/driver-standings.service';
import { TeamsStadingsService } from 'src/app/shared/services/teams-stadings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  driversStandingsDisplayedColumns: string[] = ['position', 'driver', 'car', 'team', 'points'];
  teamStandingsDisplayedColumns: string[] = ['position', 'car', 'team', 'points'];
  racesDisplayedColumns: string[] = ['position', 'driver', 'points' , 'aut', 'hun', 'aus', 'gbr', 'chn', 'esp', 'hol', 'bel', 'ita', 'vie', 'mon', 'rus', 'aze', 'can', 'fra', 'sin', 'jap', 'mex', 'usa', 'bra', 'bah', 'abu'];

  driverStandings = [];
  teamStandings = [];

  constructor(
    private driverStandingsService: DriverStandingsService,
    private teamStandingsService: TeamsStadingsService
  ) { }

  ngOnInit() {
    this.getDriverStandings();
    this.getTeamStandings();
  }

  getDriverStandings() {
    this.driverStandingsService
    .getAll()
    .subscribe((response) => {
      this.driverStandings = [];
      response.forEach(element => {
        this.driverStandings.push({
          id: element.payload.doc.id,
          data: element.payload.doc.data()
        });
      });
    });
  }

  getTeamStandings() {
    this.teamStandingsService
    .getAll()
    .subscribe((response) => {
      this.teamStandings = [];
      response.forEach(element => {
        this.teamStandings.push({
          id: element.payload.doc.id,
          data: element.payload.doc.data()
        });
      });
    });
  }

}
