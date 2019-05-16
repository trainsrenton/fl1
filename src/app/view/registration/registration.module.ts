import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrationRoutingModule } from './registration-routing';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers:[
  ],
  exports: [
    SignupComponent, SigninComponent
  ]
})
export class RegistrationModule { }
