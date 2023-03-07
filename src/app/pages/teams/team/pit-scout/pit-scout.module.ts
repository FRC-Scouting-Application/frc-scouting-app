import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PitScoutComponent } from './pit-scout.component';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: PitScoutComponent }])],
  declarations: [PitScoutComponent],
  exports: [PitScoutComponent],
})
export class PitScoutModule {}