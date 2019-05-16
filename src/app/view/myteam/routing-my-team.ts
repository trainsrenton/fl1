import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { MyteamComponent } from './myteam.component';

const routes: Routes = [
  {
    path: '',
    component: MyteamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MyTeamRoutingModule {
}
