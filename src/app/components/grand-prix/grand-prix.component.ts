import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrandPrixesService } from 'src/app/shared/services/grand-prixes.service';
import { DriverStandingsService } from 'src/app/shared/services/driver-standings.service';
import { TeamsStadingsService } from 'src/app/shared/services/teams-stadings.service';

@Component({
  selector: 'app-grand-prix',
  templateUrl: './grand-prix.component.html',
  styleUrls: ['./grand-prix.component.scss']
})
export class GrandPrixComponent implements OnInit {
  gpId;
  grandPrix;
  driverStandings = [];
  teamStandings = [];

  qualifyingDisplayedColumns: string[] = ['position', 'driver', 'team', 'tyre', 'time'];
  raceDisplayedColumns: string[] = ['position', 'driver', 'team', 'time', 'points'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private grandPrixService: GrandPrixesService,
    private driverStandingService: DriverStandingsService,
    private teamStandingService: TeamsStadingsService
  ) {
    this.gpId = this.activatedRoute.snapshot.params['id'];

   }

  ngOnInit() {
    this.getGrandPrixInfo();
    this.getDriverStandings();
    this.getTeamStandings();
  }

  getGrandPrixInfo() {
    this.grandPrixService
    .getById(this.gpId)
    .subscribe((response) => {
      this.grandPrix = response.payload.data();
    });
  }

  getDriverStandings() {
    this.driverStandingService
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
    this.teamStandingService
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
