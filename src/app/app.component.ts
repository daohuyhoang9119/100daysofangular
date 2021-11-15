import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //view
  styleUrls: ['./app.component.scss'], //style scss
})
export class AppComponent {
  title = 'daysofangular';
  public user = {
    name: 'Hh',
    age: 15,
  };
  public plusAge(age: any): number {
    console.log('+1');
    return age + 1;
  }
  public minusAge(age: any): number {
    console.log('-1');
    return age - 1;
  }
}
