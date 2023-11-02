import { Component, OnDestroy, OnInit } from '@angular/core';
import { WordService } from '../words.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit, OnDestroy {
  words: Array<string> = [];
  wordsSub!: Subscription;

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.words = this.wordService.getWords().sort();
    this.wordsSub = this.wordService.getWordsListener().subscribe(
      (words: Array<string>) => {
        this.words = words.sort();
      }
    )
  }

  ngOnDestroy(): void {
    this.wordsSub.unsubscribe();
  }
}
