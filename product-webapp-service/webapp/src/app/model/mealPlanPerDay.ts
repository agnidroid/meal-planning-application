import {  MealPlanEach } from "./mealPlanEach";


export class MealPlanPerDay {
    id:any;
    userId:number;
    mealPlanEachList:MealPlanEach[];
    totalCalories:number;
    constructor(
      id:any="",
      userId:number=0,
      mealPlanEachList:MealPlanEach[]=[],
      totalCalories:number=0
    ) {
      this.id=id;
      this.userId=userId;
      this.mealPlanEachList=mealPlanEachList;
      this.totalCalories=totalCalories;
    }
  }