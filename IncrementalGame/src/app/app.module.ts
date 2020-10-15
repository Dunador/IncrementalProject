import { SummaryBarComponent } from './game/summary-bar/summary-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarComponent } from './common/components/progress-bar/progress-bar.component';
import { ResourceFilterPipe } from './common/pipes/resource-filter/resource-filter.pipe';
import { CommonModule } from '@angular/common';
import { MainGameComponent } from './game/main-game/main-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ResourceFilterPipe,
    SummaryBarComponent,
    MainGameComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
