import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlternationModule } from './../../../alternation/src/lib/alternation.module';

import { AppComponent } from './app.component';
import { ScrollDispatchModule } from '../../../../node_modules/@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollDispatchModule,
    AlternationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
