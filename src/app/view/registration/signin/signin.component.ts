import { Component, OnInit } from '@angular/core';
import { AuthSocialsService } from 'src/app/core/services/auth-socials.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  constructor(public auth:AuthService, public authSocial:AuthSocialsService) {  }

  ngOnInit() {
  }

}
