import { Resource } from './../../common/models/resource';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-bar',
  templateUrl: './summary-bar.component.html',
  styleUrls: ['./summary-bar.component.scss']
})
export class SummaryBarComponent implements OnInit {

  @Input() resources: Resource[];

  constructor() { }

  ngOnInit(): void {
  }

}
