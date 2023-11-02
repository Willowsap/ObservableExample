import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WordService {

    private wordsListener = new Subject<Array<string>>();

    private words: Array<string> = [];

    saveWord(word: string) {
        this.words.push(word);
        localStorage.setItem('words', JSON.stringify(this.words));
        this.wordsListener.next(this.words);
    }

    getWords(): Array<string> {
        return this.words;
    }

    getWordsListener(): Observable<Array<string>> {
        return this.wordsListener.asObservable();
    }

    retrieveWords() {
        const wordsString = localStorage.getItem('words');
        if (wordsString !== null) {
            this.words = JSON.parse(wordsString);
            this.wordsListener.next(this.words);
        }
    }
}