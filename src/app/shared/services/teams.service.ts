import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAll() {
    return this.firestore.collection('teams', ref => ref.orderBy('order', 'asc')).snapshotChanges();
  }
}
