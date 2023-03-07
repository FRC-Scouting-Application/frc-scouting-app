import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamPage } from './team.page';

const routes: Routes = [
  {
    path: '',
    component: TeamPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'team'
      },
      {
        path: 'team',
        loadChildren: () => import('./team-detail/team-detail.module').then((m) => m.TeamDetailModule)
      },
      {
        path: 'pit',
        loadChildren: () => import('./pit-scout/pit-scout.module').then((m) => m.PitScoutModule)
      },
      {
        path: 'match',
        loadChildren: () => import('./match-scout/match-scout.module').then((m) => m.MatchScoutModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('./notes/notes.module').then((m) => m.NotesModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamPageRoutingModule {}
