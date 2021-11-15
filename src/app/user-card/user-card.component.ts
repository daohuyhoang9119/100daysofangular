import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public userRonaldo = {
    name: 'Ronaldo',
    age: 36,
    title: 'Legend Footbaler',
    company: 'Manchester United',
  };
}
