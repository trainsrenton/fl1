import { Injectable } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

import { UserModel } from "src/app/models/user.model";
import { AuthService } from "./auth.service";
import { Router } from '@angular/router';

@Injectable()
export class AuthSocialsService {
	user: UserModel;
	isNewUser: boolean

  constructor(
    private authservice: AuthService,
		private afAuth: AngularFireAuth,
		private router: Router
	) {	}

	// AUTHENTIFICATION VIA GOOGLE
  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  oAuthLogin(provider) {
    console.log(provider);
    return this.afAuth.auth.signInWithPopup(provider).then(credential => {
      this.isNewUser = credential.additionalUserInfo.isNewUser;

      if (this.isNewUser) {
        const data = {
          uid: credential.user.uid,
          email: credential.user.email,
          hasTeam: false,
          profileCompleted: false
        };
        this.authservice.setUser(data);
      } else {
        const data = {
            uid: credential.user.uid,
            email: credential.user.email
        };
        this.authservice.setUser(data);
      }
    });
  }
}
	
