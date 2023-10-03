import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DieterFormComponent } from './dieter-form/dieter-form.component';
import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetResultComponent } from './get-result/get-result.component';
// import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    DieterFormComponent,
    GetResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
