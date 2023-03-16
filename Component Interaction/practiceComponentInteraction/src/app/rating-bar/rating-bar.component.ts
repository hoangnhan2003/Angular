import {Component, Input, OnInit} from '@angular/core';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  arr = newArray(10);
  @Input() ratingPoint: number;
  count = 1;

  constructor() {
    this.initArr();
  }

  ngOnInit(): void {
  }

  initArr() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = i + 1 ;
    }
  }

}
