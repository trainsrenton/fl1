import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
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

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credential => {
      const isNewUser = credential.additionalUserInfo.isNewUser;
      console.log(credential.additionalUserInfo.isNewUser);
      if(isNewUser){
        this.router.navigate(['/my-team']);
      }
      this.updateUserData(credential.user);
    });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: UserModel = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["/"]);
    });
  }
}
