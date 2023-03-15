import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import Umdiauruguai from '../interfaces/umdiauruguai.interface';
import { addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UmdiauruguaiService {
  deleteUmdiauruguai: any;
  updateUmdiauruguai: any;
  comments: any;

  constructor(
    private firestore: Firestore,
    private httpClient: HttpClient
    ) { }

  addUmdiauruguai(umdiauruguai: Umdiauruguai){
    const umdiauruguaiRef = collection(this.firestore, 'umdiauruguai');
    return addDoc(umdiauruguaiRef, umdiauruguai);
  }

  getUmdiauruguai(): Observable<Umdiauruguai[]> {
    const umdiauruguaiRef = collection(this.firestore, 'umdiauruguai');
    return collectionData(umdiauruguaiRef, { idField: 'id' }) as Observable<Umdiauruguai[]>;
  }

  createUmdiauruguai(
    text: string,
    parentId: string | null = null
  ): Observable<Umdiauruguai> {
    return this.httpClient.post<Umdiauruguai>(
      'umdiauruguai',
      {
        body: text,
        parentId,
        // Should not be set here
        createdAt: new Date().toISOString(),
        userId: '1',
        username: 'John',
      }
    );
  }

  updateComment(id: string, text: string): Observable<Umdiauruguai> {
    return this.httpClient.patch<Umdiauruguai>(
      `umdiauruguai${id}`,
      {
        body: text,
      }
    );
  }

  deleteComment(id: string): Observable<{}> {
    return this.httpClient.delete(`umdiauruguai${id}`);
  }
  
  

}