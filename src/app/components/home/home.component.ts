import { Component, OnInit } from '@angular/core';
import { DriverStandingsService } from 'src/app/shared/services/driver-standings.service';
import { TeamsStadingsService } from 'src/app/shared/services/teams-stadings.service';
import { NextgpService } from 'src/app/shared/services/nextgp.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  driverStandings = [];
  teamStandings = [];
  nextGp;
  date;

  driversStandingsDisplayedColumns: string[] = ['position', 'driver', 'points'];
  teamStandingsDisplayedColumns: string[] = ['position', 'team', 'points'];

  constructor(
    private driverStandingsService: DriverStandingsService,
    private teamStandingsService: TeamsStadingsService,
    private nextGpService: NextgpService
  ) {}

  ngOnInit() {
    this.getNextGp();
    this.getDriverStandings();
    this.getTeamStandings();
  }

  getCountdown(date) {
    $(document).ready(() => {
      let timer;

      const compareDate = new Date(date);

      timer = setInterval(function () {
        timeBetweenDates(compareDate);
      }, 1000);

      function timeBetweenDates(toDate) {
        const dateEntered = toDate;
        const now = new Date();
        const difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {
          // Timer done
          clearInterval(timer);
        } else {
          let seconds = Math.floor(difference / 1000);
          let minutes = Math.floor(seconds / 60);
          let hours = Math.floor(minutes / 60);
          const days = Math.floor(hours / 24);

          hours %= 24;
          minutes %= 60;
          seconds %= 60;

          $('#days').text(days);
          $('#hours').text(hours);
          $('#minutes').text(minutes);
          $('#seconds').text(seconds);
        }
      }
    });
  }

  getNextGp() {
    this.nextGpService.getNextGp().subscribe((response) => {
      response.forEach((element) => {
        this.nextGp = {
          id: element.payload.doc.id,
          data: element.payload.doc.data(),
        };
      });
      this.getCountdown(this.nextGp.data.day);
    });
  }

  getDriverStandings() {
    this.driverStandingsService.getTopFive().subscribe((response) => {
      this.driverStandings = [];
      response.forEach((element) => {
        this.driverStandings.push({
          id: element.payload.doc.id,
          data: element.payload.doc.data(),
        });
      });
    });
  }

  getTeamStandings() {
    this.teamStandingsService.getTopFive().subscribe((response) => {
      this.teamStandings = [];
      response.forEach((element) => {
        this.teamStandings.push({
          id: element.payload.doc.id,
          data: element.payload.doc.data(),
        });
      });
    });
  }
}
