import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Team } from 'src/app/features/api/models/dbo-models';
import { RootStoreState, ScoutStoreActions, ScoutStoreSelectors } from 'src/app/root-store';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  public appPages = [
    { title: 'Team', url: '', icon: 'people' },
    { title: 'Pit Scout', url: 'pit', icon: 'home'},
    { title: 'Match Scout', url: 'match', icon: 'pulse' },
    { title: 'Notes', url: 'note', icon: 'clipboard'},
  ];

	public team: Team | undefined | null = undefined;

  constructor(
    private _route: ActivatedRoute,
    private _store: Store<RootStoreState.State>
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const teamKey = params['id'];
      this._getTeam(teamKey);
    });
  }

  private _getTeam(teamKey: string) {
    this._getTeamApi(teamKey);
  }

  private _getTeamApi(teamKey: string) {
    this._store.dispatch(ScoutStoreActions.getTeamsRequest());

    this._store.pipe(select(ScoutStoreSelectors.selectTeams)).subscribe({
        next: (teams: Team[]) => {
            if (teams && teams.length > 0) {
              for (let i = 0; i < teams.length; i++) {
                const team = teams[i];

                if (team.id == teamKey) {
                  this.team = team;
                  return;
                }
              }

              this.team = null;
            }
        },
        error: (e) => {
            console.error('Failed to get Teams! ' + e);
        }
    })
  }

}
