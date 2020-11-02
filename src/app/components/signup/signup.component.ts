import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { race } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  scheduleList = ['Sábado tarde', 'Sábado noche', 'Domingo tarde', 'Domingo noche'];
  qualifyingList = ['A una vuelta', 'Corta (18 min)', 'Completa (Q1, Q2 Y Q3)'];
  raceList = ['25%', '50%', '100%'];
  selectedSchedule;
  selectedQualifying;
  selectedRace;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      steamName: [],
      email: [],
      peripheral: [],
      schedule: this.formBuilder.array([]),
      qualifying: this.formBuilder.array([]),
      race: this.formBuilder.array([]),
      bestTime: []
    });
  }

  onChangeSchedule(event) {
    const schedules =  this.signUpForm.get('schedule') as FormArray;

    if (event.checked) {
      schedules.push(new FormControl(event.source.value));
    } else {
      const i = schedules.controls.findIndex(x => x.value === event.source.value);
      schedules.removeAt(i);
    }
  }

  onChangeQualifying(event) {
    const qualifyings =  this.signUpForm.get('qualifying') as FormArray;

    if (event.checked) {
      qualifyings.push(new FormControl(event.source.value));
    } else {
      const i = qualifyings.controls.findIndex(x => x.value === event.source.value);
      qualifyings.removeAt(i);
    }
  }

  onChangeRace(event) {
    const races =  this.signUpForm.get('race') as FormArray;

    if (event.checked) {
      races.push(new FormControl(event.source.value));
    } else {
      const i = races.controls.findIndex(x => x.value === event.source.value);
      races.removeAt(i);
    }
  }

  submitForm(value) {
    console.log(value);
  }

}
