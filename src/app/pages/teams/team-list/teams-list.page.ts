import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss'],
})
export class TeamsListPage implements OnInit {

    public teams: Team[] = [];

  constructor (
    private _store: Store<RootStoreState.State>, 
    private _router: Router
  ) { }

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

  public onClickTeam(team: Team): void {
    console.log(team);
    this._router.navigate(['teams', team.id]);
  }

}
