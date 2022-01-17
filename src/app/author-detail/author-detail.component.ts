import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../interface/author';
@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss'],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}
  ngOnInit(): void {}
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
