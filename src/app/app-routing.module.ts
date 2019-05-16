import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'my-team',
    loadChildren: 'src/app/view/myteam/my-team.module#MyTeamModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: 'src/app/view/home/home.module#HomeModule'
  },
  {
    path: 'registration',
    loadChildren: 'src/app/view/registration/registration.module#RegistrationModule'
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  