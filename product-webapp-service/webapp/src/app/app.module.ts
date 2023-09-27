import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowmealplanComponent } from './components/showmealplan/showmealplan.component';
import { HttpClientModule } from '@angular/common/http';
import { RangePipe } from './rangePipe';

@NgModule({
  declarations: [
    RangePipe,
    AppComponent,
    ShowmealplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
