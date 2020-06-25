import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { StandingsComponent } from './components/standings/standings.component';
import { RegulationComponent } from './components/regulation/regulation.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { 
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';
import { GrandPrixComponent } from './components/grand-prix/grand-prix.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DriversTeamsComponent } from './components/drivers-teams/drivers-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StandingsComponent,
    RegulationComponent,
    ScheduleComponent,
    GrandPrixComponent,
    DriversTeamsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
