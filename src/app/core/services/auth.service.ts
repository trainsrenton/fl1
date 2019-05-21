import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth, database } from "firebase/app";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { UserModel } from "src/app/models/user.model";

@Injectable()
export class AuthService {
  user: Observable<UserModel>;
  isNewUser: boolean;
  currentUser: UserModel;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    // RECUPERE LES DONNEES DE L'USER CONNECTE
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
            return this.afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
        } else {
            return of(null);
        }
      })
    );

    this.user.subscribe(res => this.currentUser = res);

  }

  // AUTHENTIFICATION VIA GOOGLE

  
  //INSCRIPTION VIA EMAIL AND PASSWORD
  public emailSignup(email: string, password: string, pseudo: string, city: string, favTeam: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        const userInfo = {
          
        };
        this.router.navigate(["/my-team"]);
        return this.setUser(userInfo);
      })
      .catch(error => console.log(error));
  }

  getUser(){
    const profileCompleted = this.currentUser.profileCompleted
    if(!profileCompleted){
        this.router.navigate(['/registration/signup'])
    }else{
        this.router.navigate(['my-team'])
    }
    this.setUser(this.currentUser);
  }

  // ENREGISTREMENT OU UPDATE DU USER EN BASE 
  public setUser(userInfo) {
    const userRef: AngularFirestoreDocument<UserModel> = this.afs.doc(`users/${userInfo.uid}`);
    const data:UserModel = {
        ...userInfo
    }
    return userRef.set(data, { merge: true });
  }

  // DECONNEXION
  signOut(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["/"]);
    });
  }
}
