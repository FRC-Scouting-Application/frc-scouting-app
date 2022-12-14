import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Teams', url: 'teams', icon: 'people' },
    { title: 'Events', url: 'events', icon: 'calendar'},
  ];
  constructor() {}
}
