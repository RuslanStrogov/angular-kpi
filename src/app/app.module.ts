import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KpiModule } from "./kpi"

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KpiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
