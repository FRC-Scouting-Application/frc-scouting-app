import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MatchScoutComponent } from './match-scout.component';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: MatchScoutComponent }])],
  declarations: [MatchScoutComponent],
  exports: [MatchScoutComponent],
})
export class MatchScoutModule {}