import { Resource } from './../../common/models/resource';
import { formatNumber } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { Producer } from '../../common/models/producer';
import defaultResources from '../../assets/resources.json';
@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit, OnDestroy {
  resources: Resource[] = defaultResources;

  constructor() {
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
