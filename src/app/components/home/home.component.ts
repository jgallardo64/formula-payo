import { Component, OnInit } from '@angular/core';
import { DriverStandingsService } from 'src/app/shared/services/driver-standings.service';
import { TeamsStadingsService } from 'src/app/shared/services/teams-stadings.service';
import { GrandPrixesService } from 'src/app/shared/services/grand-prixes.service';
import { NextgpService } from 'src/app/shared/services/nextgp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  driverStandings = [];
  teamStandings = [];
  nextGp;

  driversStandingsDisplayedColumns: string[] = ['position', 'driver', 'points'];
  teamStandingsDisplayedColumns: string[] = ['position', 'team', 'points'];

  constructor(
    private grandPrixService: GrandPrixesService,
    private driverStandingsService: DriverStandingsService,
    private teamStandingsService: TeamsStadingsService,
    private nextGpService: NextgpService
  ) { }
  

  ngOnInit() {
    this.getNextGp();
    this.getDriverStandings();
    this.getTeamStandings();
  }

  getNextGp() {
    this.nextGpService
    .getNextGp()
    .subscribe((response) => {
      response.forEach(element => {
        this.nextGp = {
          id: element.payload.doc.id,
          data: element.payload.doc.data()
        }
      });
    });
  }

  getDriverStandings() {
    this.driverStandingsService
    .getTopFive()
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
    .getTopFive()
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
