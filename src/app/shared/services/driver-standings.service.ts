import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DriverStandingsService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAll() {
    return this.firestore.collection('driver-standings', ref => ref.orderBy('points', 'desc')).snapshotChanges();
  }

  getTopFive() {
    return this.firestore.collection('driver-standings', ref => ref.orderBy('points', 'desc').limit(5)).snapshotChanges();
  }

  create(data: any) {
    return this.firestore.collection('driver-standings').add(data);
  }
}
