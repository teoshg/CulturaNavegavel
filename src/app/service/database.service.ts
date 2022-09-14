import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import Base from '../interfaces/base.interface';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: Firestore) { }

  addBase(base: Base) {
    const baseRef = collection(this.firestore, 'base');
  }

}
