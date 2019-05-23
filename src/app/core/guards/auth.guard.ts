import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "../services/auth.service";

import { Observable } from "rxjs";
import { tap, map, take } from "rxjs/operators";
import { auth } from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  user;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{

    if(!this.auth.currentUser.profileCompleted){
      this.router.navigate(["/registration/signup"]);
      return false
    }
    
  }
}
