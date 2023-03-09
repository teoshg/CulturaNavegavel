import { Firestore, collection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import Scribe from 'app/interfaces/scribe.interface';
import { addDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class ScribeService {

  constructor(private Firestore: Firestore) { }

  addScribe(scribe: Scribe){
    const scribeRef = collection(this.Firestore, 'scribe');
    return addDoc(scribeRef, scribe);
  }
  
}
