import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Teams', url: '/pages/teams', icon: 'people'},
    { title: 'Events', url: '/pages/events', icon: 'calendar'},
  ];
  constructor() {}
}
