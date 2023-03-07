import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NotesComponent } from './notes.component';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: NotesComponent }])],
  declarations: [NotesComponent],
  exports: [NotesComponent],
})
export class NotesModule {}