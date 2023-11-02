import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WordService } from '../words.service';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent {

  constructor(private wordService: WordService) {}

  saveWord(form: NgForm) {
    this.wordService.saveWord(form.value["word"]);
    form.reset();
  }
}
