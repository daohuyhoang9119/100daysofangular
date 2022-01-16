import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  templateUrl: './version-parent.component.html',
  styleUrls: ['./version-parent.component.scss'],
})
export class VersionParentComponent implements OnInit {
  major = 1;
  minor = 23;
  constructor() {}

  ngOnInit(): void {}

  newMinor() {
    this.minor++;
    // console.log('runn');
    console.log(this.minor);
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
