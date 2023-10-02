import { Component, OnInit } from '@angular/core';
import { MealPlanEach } from 'src/app/model/mealPlanEach';
import { MealPlanPerDay } from 'src/app/model/mealPlanPerDay';
import { MealplanService } from 'src/app/services/mealplan.service';
import { DialogElementsExampleComponent } from '../dialog-elements-example/dialog-elements-example.component';
import { MatDialog } from '@angular/material/dialog';
import { MealplanDialogComponent } from '../mealplan-dialog/mealplan-dialog.component';
import { GenerateMealplanDialogComponent } from '../generate-mealplan-dialog/generate-mealplan-dialog.component';

@Component({
  selector: 'app-showmealplan',
  templateUrl: './showmealplan.component.html',
  styleUrls: ['./showmealplan.component.css'],

})
export class ShowmealplanComponent implements OnInit {
  mealPlanPerDayList: MealPlanPerDay[] = [];
  x: number = 0;
  mealTime:string[]=["Breakfast","Lunch","Dinner"]
  constructor(private mealPlanService: MealplanService, public dialog: MatDialog) {
    this.getTodayDate()
  }
  getTodayDate(){
      this.mealPlanService.delFromFirst().subscribe((response)=>{
        this.getMealPlanOfPerson()
      })
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleComponent);
  }
  genMealPlan() {
    const l = this.mealPlanPerDayList.length
    if (l < 3) {
      this.dialog.open(GenerateMealplanDialogComponent).afterClosed().subscribe(result=>{
        this.getMealPlanOfPerson()
      })
    }
    else {
      this.dialog.open(DialogElementsExampleComponent)
    }

  }
  countPerDayPerUser() {
    this.mealPlanService.countPerDayPerUser().subscribe((response) => {
      this.x = response
    })
  }
  getMealPlanOfPerson() {
    this.mealPlanService.getMealPlanOfPerson().subscribe((response) => {
      this.mealPlanPerDayList = response;
      this.countPerDayPerUser()
    })
    console.log(this.mealPlanPerDayList)
  }
  delFromLast() {
    console.log("workingg")
    this.mealPlanService.delFromLast().subscribe((response) => {
      this.getMealPlanOfPerson()
      console.log(response)
      console.log("Working")
    })
  }
  round(TotalCalories: number) {
    return Math.round(TotalCalories * 100) / 100
  }


  // genRandomOnExistingId(mealPlanPerDay: MealPlanPerDay) {
  //   this.mealPlanService.genRandomOnExistingId(mealPlanPerDay).subscribe((response) => {
  //     this.getMealPlanOfPerson()
  //   })
  // }

  genRandomOnExistingId(mealPlanPerDay: MealPlanPerDay) {
    this.dialog.open(MealplanDialogComponent,{
      data:mealPlanPerDay
    }).afterClosed().subscribe(result=>{
      this.getMealPlanOfPerson()
    });
  }
  getItsMealPLan(mealPlanEach: MealPlanEach) {
    return "632854"
  }

  ngOnInit(): void {
  }



}
