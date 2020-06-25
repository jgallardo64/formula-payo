import { Component, OnInit } from '@angular/core';
import { DriverStandingsService } from 'src/app/shared/services/driver-standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  driverStandings = [];

  constructor(
    private driverStandingsService: DriverStandingsService
  ) { }

  ngOnInit() {
    this.getDriverStandings();
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

}
