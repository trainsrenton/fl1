import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthSocialsService } from './services/auth-socials.service';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, AuthSocialsService]
})
export class Fl1coreModule { }
