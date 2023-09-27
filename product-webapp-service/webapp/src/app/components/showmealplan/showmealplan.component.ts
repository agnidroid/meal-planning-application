import { Component, OnInit } from '@angular/core';
import { MealPlanPerDay } from 'src/app/model/mealPlanPerDay';
import { MealplanService } from 'src/app/services/mealplan.service';

@Component({
  selector: 'app-showmealplan',
  templateUrl: './showmealplan.component.html',
  styleUrls: ['./showmealplan.component.css']
})
export class ShowmealplanComponent implements OnInit {
  mealPlanPerDayList:MealPlanPerDay[]=[];
  x:number=0;
  constructor(private mealPlanService:MealplanService) { 
    this.getMealPlanOfPerson()
  }
  genMealPlan(){
    this.mealPlanService.genOneDayMealPlan().subscribe((response)=>{
      this.getMealPlanOfPerson()
    })
  }
  countPerDayPerUser(){
    this.mealPlanService.countPerDayPerUser().subscribe((response)=>{
      this.x=response
    })
  }
  getMealPlanOfPerson(){
    this.mealPlanService.getMealPlanOfPerson().subscribe((response)=>{
      this.mealPlanPerDayList=response;
      this.countPerDayPerUser()
    })

  }
  delFromLast(){
    console.log("workingg")
    this.mealPlanService.delFromLast().subscribe((response)=>{
      this.getMealPlanOfPerson()
      console.log(response)
      console.log("Working")
    })
  }
  round(TotalCalories:number){
    return Math.round(TotalCalories * 100) / 100
  }
  genRandomOnExistingId(mealPlanPerDay:MealPlanPerDay){
    this.mealPlanService.genRandomOnExistingId(mealPlanPerDay).subscribe((response)=>{
      this.getMealPlanOfPerson()
    })
  }
  ngOnInit(): void {
  }

}
