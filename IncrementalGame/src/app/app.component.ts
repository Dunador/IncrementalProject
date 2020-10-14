import { formatNumber } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { Producer } from './common/models/producer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'IncrementalGame';
  currentValue: number;
  neededValue: number;
  intervalRef: any;
  prestigeCount: number;
  producers: Producer[] = [];
  producer1: Producer;

  constructor(@Inject(LOCALE_ID) private locale: string) {
    this.currentValue = 1;
    this.neededValue = 10;
    this.producers.push({
      name: 'Producer 1',
      baseValue: 1,
      baseCost: 1,
      costGrowth: 1.25,
      currentQuantity: 0,
      nextCost: 1,
    });
  }

  ngOnInit(): void {
    this.intervalRef = setInterval(() => {
      if (this.currentValue === this.neededValue) {
        this.currentValue = 0;
        this.neededValue = this.neededValue * 1.25;
        this.prestigeCount++;
      }
      this.currentValue += this.calculateTickGain();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalRef) {
      window.clearInterval(this.intervalRef);
    }
  }

  purchaseProducer(name: string): void {
    const producer = this.producers.find((p) => p.name === name);
    this.currentValue = Number(formatNumber(this.currentValue - producer.nextCost, this.locale, '1.2-2'));
    producer.currentQuantity++;
    producer.nextCost = (producer.baseCost * (producer.costGrowth ** (producer.currentQuantity)));
    producer.nextCost = Number(formatNumber(producer.nextCost, this.locale, '1.2-2'));
  }

  calculateTickGain(): number {
    let total = 0;
    this.producers.forEach((p) => {
      total += (p.baseValue * p.currentQuantity);
    });
    return total;
  }
}
