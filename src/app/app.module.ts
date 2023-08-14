import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeniorityComponent } from './seniority/seniority.component';
import { PositionComponent } from './position/position.component';
import { TestComponent } from './test/test.component';
import { ResultsComponent } from './results/results.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeniorityComponent,
    PositionComponent,
    TestComponent,
    ResultsComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
