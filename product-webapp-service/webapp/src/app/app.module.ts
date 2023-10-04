import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowmealplanComponent } from './components/showmealplan/showmealplan.component';
import { HttpClientModule } from '@angular/common/http';
import { RangePipe } from './rangePipe';
import { DialogElementsExampleComponent } from './components/dialog-elements-example/dialog-elements-example.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { GenerateMealplanDialogComponent } from './components/generate-mealplan-dialog/generate-mealplan-dialog.component';
import { MealplanDialogComponent } from './components/mealplan-dialog/mealplan-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    RangePipe,
    AppComponent,
    ShowmealplanComponent,
    DialogElementsExampleComponent,
    GenerateMealplanDialogComponent,
    MealplanDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    MatButtonModule, 
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
