import { Component, OnInit, OnDestroy } from "@angular/core";

import { GetclubsService } from "src/app/services/clubs.service";
import { AuthService } from "src/app/core/services/auth.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
  providers: [GetclubsService]
})
export class SignupComponent implements OnInit, OnDestroy {
  clubs: any;
  signupForm: FormGroup;

  constructor(
    private clubsServices: GetclubsService,
    private auth: AuthService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getClubs();

    this.signupForm = this.fb.group({
      email: [""],
      password: [""],
      pseudo: [""],
      city: [""],
      favteam: [""]
    });
  }

  get email() {
    return this.signupForm.get("email");
  }
  get password() {
    return this.signupForm.get("password");
  }
  get pseudo() {
    return this.signupForm.get("pseudo");
  }
  get city() {
    return this.signupForm.get("city");
  }
  get favteam() {
    return this.signupForm.get("favteam");
  }

  signUp() {
    this.auth.emailSignup(
      this.email.value,
      this.password.value,
      this.pseudo.value,
      this.city.value,
      this.favteam.value
    );
  }

  getClubs() {
    this.clubsServices.getClub().subscribe(res => {
      this.clubs = res;
    });
  }

  ngOnDestroy() {}
}
