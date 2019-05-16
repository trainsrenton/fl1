import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyteamComponent } from './myteam.component';
import { MyTeamRoutingModule } from './routing-my-team';

@NgModule({
  declarations: [MyteamComponent],
  imports: [
    CommonModule,
    MyTeamRoutingModule
  ],
  exports: [MyteamComponent]
})

export class MyTeamModule { 
}
