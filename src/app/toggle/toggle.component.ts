import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  constructor() {}

  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  ngOnInit(): void {}
  public toggle(): void {
    console.log('toggle is running');
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
