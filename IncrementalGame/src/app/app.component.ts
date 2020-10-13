import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IncrementalGame';
  currentValue: number;
  neededValue: number;
  intervalRef: any;

  constructor() {
    this.currentValue = 0;
    this.neededValue = 10;
  }

  ngOnInit() {
    this.intervalRef = setInterval(() => {
      if (this.currentValue == this.neededValue) {
        this.currentValue = 0;
      }
      this.currentValue++;
    }, 1000)
  }

  ngOnDestroy() {
    if (this.intervalRef) {
      window.clearInterval(this.intervalRef);
    }
  }
}
