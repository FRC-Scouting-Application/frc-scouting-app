import { Event, Match, Scout, Team, Template } from "src/app/features/api/models/dbo-models";

export interface State {
  events: Event[];
  teams: Team[];
  matches: Match[];
  templates: Template[];
  scouts: Scout[];
  loading: boolean;
  success: boolean;
  error: any;
}

export const initialState: State = {
  events: [],
  teams: [],
  matches: [],
  templates: [],
  scouts: [],
  loading: false,
  success: true,
  error: null
}
