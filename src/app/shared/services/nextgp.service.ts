import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NextgpService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getNextGp() {
    return this.firestore.collection('next-gp').snapshotChanges();
  }
}
