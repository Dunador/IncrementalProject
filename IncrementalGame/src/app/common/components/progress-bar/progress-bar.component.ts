import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() currentValue;
  @Input() neededValue;


  constructor() { }

  ngOnInit(): void {
  }

  getPercent(): number {
      const percent = (this.currentValue / this.neededValue) * 100;
      return (percent <= 100 ? percent : 100);
  }

}
