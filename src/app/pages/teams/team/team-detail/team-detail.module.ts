import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TeamDetailComponent } from './team-detail.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    IonicModule, 
    RouterModule.forChild([{ path: '', component: TeamDetailComponent }]),
    MatIconModule
  ],
  declarations: [TeamDetailComponent],
  exports: [TeamDetailComponent],
})
export class TeamDetailModule {}