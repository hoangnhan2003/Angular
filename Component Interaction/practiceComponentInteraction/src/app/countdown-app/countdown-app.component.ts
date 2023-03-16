import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-app',
  templateUrl: './countdown-app.component.html',
  styleUrls: ['./countdown-app.component.css']
})
export class CountdownAppComponent implements OnInit {
  stop = false;
  time = 10;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickStop() {
    this.stop = !this.stop;
  }

  countDown() {
    const interval = setInterval(() => {
      this.time--;
      if (this.stop === true) {
        clearInterval(interval);
      }
      if (this.time === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  reset() {
    this.time = 10;
    this.stop = false;
  }
}
