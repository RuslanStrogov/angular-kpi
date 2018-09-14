import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { KpiModule } from "./kpi"

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    KpiModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
