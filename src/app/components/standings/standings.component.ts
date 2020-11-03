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
  racesDisplayedColumns: string[] = ['position', 'driver', 'points' , 'aut', 'hun', 'aus', 'gbr', 'hol', 'esp', 'mon', 'bel', 'ita'];

  driverStandings = [];
  teamStandings = [];

  newDriver = {
    AUT: {position: "DNS", dsq: false, dnf: false, fastestlap: false},
    HUN: {fastestLap: false, dsq: false, position: "DNS", dnf: false},
    AUS: {position: "DNS", dnf: false, dsq: false, fastestLap: false},
    GBR: {dsq: false, fastestLap: false, position: "DNS", dnf: false},
    CHN: {dnf: false, fastestlap: false, dsq: false, position: "DNS"},
    ESP: {position: "DNS", dsq: false, dnf: false, fastestLap: false},
    HOL: {position: "DNS", dsq: false, fastestLap: false, dnf: false},
    BEL: {fastestLap: false, dnf: false, dsq: false, position: "DNS"},
    ITA: {dsq: false, fastestLap: false, dnf: false, position: "DNS"},
    VIE: {dsq: false, dnf: false, fastestLap: false, position: "DNS"},
    MON: {dsq: false, dnf: false, position: "DNS", fastestLap: false},
    RUS: {dsq: false, fastestLap: false, dnf: false, position: "DNS"},
    AZE: {position: "DNS", fastestlap: false, dsq: false, dnf: false},
    CAN: {dsq: false, dnf: false, fastestLap: false, position: "DNS"},
    FRA: {position: "DNS", fastestLap: false, dnf: false, dsq: false},
    SIN: {position: "DNS", dsq: false, dnf: false, fastestLap: false},
    JAP: {fastestLap: false, position: "DNS", dnf: false, dsq: false},
    MEX: {dnf: false, position: "-", fastestLap: false, dsq: false},
    USA: {dnf: false, dsq: false, position: "-", fastestLap: false},
    BRA: {fastestLap: false, position: "-", dsq: false, dnf: false},
    BAH: {dsq: false, position: "-", fastestLap: false, dnf: false},
    ABU: {fastestLap: false, position: "-", dnf: false, dsq: false},
    driver: "",
    points: 0,
    team: "",
    teamId: "",
  };

  constructor(
    private driverStandingsService: DriverStandingsService,
    private teamStandingsService: TeamsStadingsService
  ) { }

  ngOnInit() {
    this.getDriverStandings();
    this.getTeamStandings();
  }

  createDriver() {
    this.driverStandingsService
    .create(this.newDriver);
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
