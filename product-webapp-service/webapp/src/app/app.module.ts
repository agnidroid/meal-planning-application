import { NgModule , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowmealplanComponent } from './components/showmealplan/showmealplan.component';
import { RangePipe } from './rangePipe';
import { DialogElementsExampleComponent } from './components/dialog-elements-example/dialog-elements-example.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GenerateMealplanDialogComponent } from './components/generate-mealplan-dialog/generate-mealplan-dialog.component';
import { MealplanDialogComponent } from './components/mealplan-dialog/mealplan-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DieterFormComponent } from './dieter-form/dieter-form.component';
import { GetResultComponent } from './get-result/get-result.component';
// import { DatePickerComponent } from './date-picker/date-picker.component';
import { ToastrModule } from 'ngx-toastr';


import { NotificationComponent } from './component/notification/notification.component';
import { NotificationService } from './services/notification.service';
import { RouterModule , Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    RangePipe,
    AppComponent,
    ShowmealplanComponent,
    DialogElementsExampleComponent,
    GenerateMealplanDialogComponent,
    MealplanDialogComponent,
    DieterFormComponent,
    GetResultComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
