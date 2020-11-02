import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StandingsComponent } from './components/standings/standings.component';
import { RegulationComponent } from './components/regulation/regulation.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { GrandPrixComponent } from './components/grand-prix/grand-prix.component';
import { DriversTeamsComponent } from './components/drivers-teams/drivers-teams.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'drivers-teams',
    component: DriversTeamsComponent
  },
  {
    path: 'standings',
    component: StandingsComponent
  },
  {
    path: 'regulation',
    component: RegulationComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'schedule/:id',
    component: GrandPrixComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
