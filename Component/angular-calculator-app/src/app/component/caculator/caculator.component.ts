import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  caculator = {operator: "", result: 0}

  constructor() {
  }

  ngOnInit(): void {
  }

  insert(number: string) {
    this.caculator.operator += number;

  }

  clean() {
    this.caculator.operator= "";
  }

  back() {
    var number = this.caculator.operator.length ;
    var result = this.caculator.operator.slice(0,number-1);
    this.caculator.operator = result;
  }

  solve() {
    var number = eval(this.caculator.operator);
    this.caculator.operator = number;
  }
}
