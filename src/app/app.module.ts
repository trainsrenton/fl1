// ANGULAR CORE
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// FIRESTORE
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';

// MATERIAL
import {MatButtonModule} from '@angular/material/button';

//APP
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/shared/header/header.component';

//MODULE APP
import { Fl1coreModule } from './core/fl1core.module';
import { AppRoutingModule } from './app-routing.module';

//SERVICES
import { AuthService } from './core/services/auth.service';

//ENV
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    Fl1coreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
