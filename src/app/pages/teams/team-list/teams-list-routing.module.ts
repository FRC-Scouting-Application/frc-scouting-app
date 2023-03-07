import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsListPage } from './teams-list.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsListPage
  },
  {
    path: ':id',
    loadChildren: () => import('../team/team.module').then( m => m.TeamPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsPageRoutingModule {}
