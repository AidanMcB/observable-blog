import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetTheTimeComponent } from './get-the-time/get-the-time.component';

@NgModule({
  declarations: [
    AppComponent,
    GetTheTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
