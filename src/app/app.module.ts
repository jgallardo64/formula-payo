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
  MatTabsModule,
  MatTableModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';
import { GrandPrixComponent } from './components/grand-prix/grand-prix.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DriversTeamsComponent } from './components/drivers-teams/drivers-teams.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountdownModule, CountdownGlobalConfig } from 'ngx-countdown';

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
    CountdownModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    CountdownModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: CountdownGlobalConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
