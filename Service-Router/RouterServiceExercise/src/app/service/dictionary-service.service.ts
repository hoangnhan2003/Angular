import { Injectable } from '@angular/core';
import {Iword} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  words: Iword[] = [];
  constructor() {
    this.words.push({word: 'car', mean: 'o to'});
    this.words.push({word: 'ship', mean: 'thuyen'});
    this.words.push({word: 'umbrella', mean: 'dù'});
    this.words.push({word: 'pig', mean: 'con heo'});
    this.words.push({word: 'darling', mean: 'dũng cảm'});
    this.words.push({word: 'pink', mean: 'màu hồng'});
    this.words.push({word: 'brain dog', mean: 'óc chó'});
  }
  addNewWord(word: any): void {
    this.words.push(word);
  }
  translate(text: any): string {
    return this.words.filter( word => word.word === text)[0].mean;
  }
  getALl(): Iword[] {
    return this.words;
  }
  getByWord(text: any): Iword {
    return this.words.filter( word => word.word === text)[0];
  }
}
