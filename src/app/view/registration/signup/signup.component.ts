import { Component, OnInit } from '@angular/core';
import { GetclubsService } from 'src/app/services/clubs.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers:[GetclubsService]
})
export class SignupComponent implements OnInit {

  constructor(private clubsServices:GetclubsService, private firestore: AngularFirestore) { }

  clubs;

  ngOnInit() {
    this.getClubs();
  }

  getClubs(){
    this.clubsServices.getClub().subscribe(res => {
      this.clubs = res
    });
  }
}
