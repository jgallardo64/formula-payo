import { Component, OnInit } from '@angular/core';
import { DriverStandingsService } from 'src/app/shared/services/driver-standings.service';
import { TeamsStadingsService } from 'src/app/shared/services/teams-stadings.service';
import { NextgpService } from 'src/app/shared/services/nextgp.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { GrandPrixesService } from 'src/app/shared/services/grand-prixes.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  testForm: FormGroup;
  qualifying: FormArray;
  race: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private grandPrixService: GrandPrixesService
  ) {}

  ngOnInit() {
    this.testForm = new FormGroup({
      qualifying: new FormArray([]),
      race: new FormArray([])
    });
  }

  createQualyDriver(): FormGroup {
    return this.formBuilder.group({
      driver: '',
      team: '',
      teamId: '',
      time: '',
      tyre: '',
      difference: ''
    });
  }

  createRaceDriver(): FormGroup {
    return this.formBuilder.group({
      driver: '',
      team: '',
      teamId: '',
      time: '',
      points: ''
    });
  }

  addQualyDriver(): void {
    this.qualifying = this.testForm.get('qualifying') as FormArray;
    this.qualifying.push(this.createQualyDriver());
  }

  addRaceDriver(): void {
    this.race = this.testForm.get('race') as FormArray;
    this.race.push(this.createRaceDriver());
  }

  sendForm(values) {
    this.grandPrixService.update('great-britain', values);
  }
}
