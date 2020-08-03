import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GrandPrixesService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAll() {
    return this.firestore.collection('grand-prixes', ref => ref.orderBy('order', 'asc')).snapshotChanges();
  }

  getById(grandPrixId: string) {
    return this.firestore.collection('grand-prixes').doc(grandPrixId).snapshotChanges();
  }

  create(data: any) {
    return this.firestore.collection('grand-prixes').add(data);
  }

  update(grandPrixId, data: any) {
    return this.firestore.collection('grand-prixes').doc(grandPrixId).update(data);
  }
}
