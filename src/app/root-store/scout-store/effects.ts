import { Injectable, OnDestroy } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { catchError, map, of, switchMap } from "rxjs";

import * as featureActions from './actions';
import { ScoutApiService } from "src/app/features/api/services/scout.api.service";
import { Event, Match, Scout, Team, Template } from "src/app/features/api/models/dbo-models";

@Injectable()
@AutoUnsubscribe()
export class ScoutStoreEffects implements OnDestroy {

  constructor(
    private scoutAPIService: ScoutApiService,
    private actions: Actions
  ) { }

  /* Events */

	events$ = createEffect(() => this.actions.pipe(
    ofType(featureActions.getEventsRequest),
    switchMap((action) =>
      this.scoutAPIService.GetEventsAsync()
        .pipe(
          map((payload: Event[]) => featureActions.getEventsSuccess({ payload })),
          catchError(error => of(featureActions.failure({ error })))
        )
      )
  ));

  /* Teams */
  teams$ = createEffect(() => this.actions.pipe(
    ofType(featureActions.getTeamsRequest),
    switchMap((action) =>
      this.scoutAPIService.GetTeamsAsync()
        .pipe(
          map((payload: Team[]) => featureActions.getTeamsSuccess({ payload })),
          catchError(error => of(featureActions.failure({ error })))
        )
    )
  ));

  /* Matches */
  matches$ = createEffect(() => this.actions.pipe(
    ofType(featureActions.getMatchesRequest),
    switchMap((action) =>
      this.scoutAPIService.GetMatchesAsync(action.payload)
        .pipe(
          map((payload: Match[]) => featureActions.getMatchesSuccess({ payload })),
          catchError(error => of(featureActions.failure({ error })))
        )
    )
  ));

  /* Templates */
  templates$ = createEffect(() => this.actions.pipe(
    ofType(featureActions.getTemplatesRequest),
    switchMap((action) =>
      this.scoutAPIService.GetTemplatesAsync()
        .pipe(
          map((payload: Template[]) => featureActions.getTemplatesSuccess({ payload })),
          catchError(error => of(featureActions.failure({ error })))
        )
    )
  ));

  /* Scouts */
  scoutsByEvent$ = createEffect(() => this.actions.pipe(
    ofType(featureActions.getScoutsByEventRequest),
    switchMap((action) =>
      this.scoutAPIService.GetScoutsByEventAsync(action.payload)
        .pipe(
          map((payload: Scout[]) => featureActions.getScoutsSuccess({ payload })),
          catchError(error => of(featureActions.failure({ error })))
        )
    )
  ));

  scoutsByTeam$ = createEffect(() => this.actions.pipe(
    ofType(featureActions.getScoutsByTeamRequest),
    switchMap((action) =>
      this.scoutAPIService.GetScoutsByTeamAsync(action.payload)
        .pipe(
          map((payload: Scout[]) => featureActions.getScoutsSuccess({ payload })),
          catchError(error => of(featureActions.failure({ error })))
        )
    )
  ));

  ngOnDestroy() { }

}
