import { Component, OnInit } from '@angular/core';
import { WordService } from './words/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SortedList';

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.wordService.retrieveWords();
  }
}
