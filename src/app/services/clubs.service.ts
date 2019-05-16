import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ClubModel } from '../models/club.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetclubsService {
  
  private collectionRef: AngularFirestoreCollection<ClubModel>
  public clubs:any;
  
  constructor(private firestore: AngularFirestore) {
    this.collectionRef = this.firestore.collection<ClubModel>('clubs');
  }

  getClub():Observable<ClubModel[]>{
    this.clubs = this.collectionRef.snapshotChanges().pipe(
      map(actions => actions.map(item => {
        const id = item.payload.doc.id;
        const data = item.payload.doc.data() as ClubModel;
        return {
          id,... data
        }
      }))
    )

    return this.clubs;
  }
  
}