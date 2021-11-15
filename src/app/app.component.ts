import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //view
  styleUrls: ['./app.component.scss'], //style scss
})
export class AppComponent {
  title = 'daysofangular';
  public name = 'Hh';
  public user = {
    name: 'hoang',
    age: 21,
  };

  public logUserName(): void {
    console.log(this.user.name);
  }
}
