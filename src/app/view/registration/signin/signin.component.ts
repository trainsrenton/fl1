import { Component, OnInit } from '@angular/core';
import { AuthSocialsService } from 'src/app/core/services/auth-socials.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { auth } from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  formSignin: FormGroup;

  constructor(public auth:AuthService, public authSocial:AuthSocialsService, private fb:FormBuilder) {  }

  ngOnInit() {
    this.formSignin = this.fb.group({
      email:[""],
      password: [""]
    })
  }

  get email() {
    return this.formSignin.get("email");
  }
  get password() {
    return this.formSignin.get("password");
  }

  emailSignIn(){
    this.auth.emailSignIn(this.email.value, this.password.value);
  }

}
