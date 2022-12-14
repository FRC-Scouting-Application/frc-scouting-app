import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Team } from 'src/app/features/api/models/dbo-models';
import { RootStoreState, ScoutStoreActions, ScoutStoreSelectors } from 'src/app/root-store';

export function SORT_TEAMS(a: Team, b: Team) {
    if (a.teamNumber < b.teamNumber) return -1;
    if (a.teamNumber > b.teamNumber) return 1;

    return 0;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

    public teams: Team[] = [];

  constructor(private _store: Store<RootStoreState.State>) { }

  ngOnInit() {
    this._callApi();
  }

  private _callApi() {
    this._store.dispatch(ScoutStoreActions.getTeamsRequest());

    this._store.pipe(select(ScoutStoreSelectors.selectTeams)).subscribe({
        next: (teams: Team[]) => {
            if (teams && teams.length > 0) {
                this.teams = teams;
                this.teams.sort(SORT_TEAMS);
            }
        },
        error: (e) => {
            console.error('Failed to get Teams! ' + e);
        }
    })
  }

}
