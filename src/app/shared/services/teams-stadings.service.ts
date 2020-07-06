import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeamsStadingsService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAll() {
    return this.firestore.collection('teams-standings', ref => ref.orderBy('points', 'desc')).snapshotChanges();
  }

  getTopFive() {
    return this.firestore.collection('teams-standings', ref => ref.orderBy('points', 'desc').limit(5)).snapshotChanges();
  }

  create(data: any) {
    return this.firestore.collection('teams-standings').add(data);
  }
}
