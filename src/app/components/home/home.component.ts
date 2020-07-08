import { Component, OnInit } from '@angular/core';
import { DriverStandingsService } from 'src/app/shared/services/driver-standings.service';
import { TeamsStadingsService } from 'src/app/shared/services/teams-stadings.service';
import { NextgpService } from 'src/app/shared/services/nextgp.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  testForm: FormGroup;

  driversStandingsDisplayedColumns: string[] = ['position', 'driver', 'points'];
  teamStandingsDisplayedColumns: string[] = ['position', 'team', 'points'];

  constructor(
    private formBuilder: FormBuilder,
    private driverStandingsService: DriverStandingsService,
    private teamStandingsService: TeamsStadingsService,
    private nextGpService: NextgpService
  ) {}

  ngOnInit() {
    // this.buildForm();
    this.getNextGp();
    this.getDriverStandings();
    this.getTeamStandings();
  }

  buildForm() {
    this.testForm = this.formBuilder.group({
      driver: [{value: null, disabled: null}],
      points: [{value: 0, disabled: null}],
      team: [{value: null, disabled: null}],
      teamId: [{value: null, disabled: null}],
      AUS: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      BAR: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      VTN: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      CHN: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      HOL: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      MON: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      AZE: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      CAN: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      FRA: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      AUT: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      HUN: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      GBR: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      ESP: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      BEL: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      ITA: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      SIN: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      RUS: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      JAP: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      USA: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      MEX: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      BRA: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      }),
      ABU: this.formBuilder.group({
        position: [{value: '-', disabled: null}],
        dnf: [{value: false, disabled: null}],
        dsq: [{value: false, disabled: null}],
        fastestLap: [{value: false, disabled: null}]
      })
    });
  }

  sendForm(values) {
    this.driverStandingsService
    .create(values);
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
