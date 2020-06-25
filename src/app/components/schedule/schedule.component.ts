import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrandPrixesService } from 'src/app/shared/services/grand-prixes.service';
import { NextgpService } from 'src/app/shared/services/nextgp.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  calendar = [];
  nextGp;

  constructor(
    private router: Router,
    private grandPrixService: GrandPrixesService,
    private nextGpService: NextgpService
  ) { }

  ngOnInit() {
    this.getNextGp();
    this.getGrandPrixes();
  }

  getGrandPrixes() {
    this.grandPrixService
    .getAll()
    .subscribe((response) => {
      this.calendar = [];
      response.forEach(element => {
        this.calendar.push({
          id: element.payload.doc.id,
          data: element.payload.doc.data()
        });
      });
    });
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

}
