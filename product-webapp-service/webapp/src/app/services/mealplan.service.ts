import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MealPlanPerDay } from '../model/mealPlanPerDay';

@Injectable({
  providedIn: 'root'
})
export class MealplanService {
  url:string="http://localhost:8081/meal/";
  constructor(private http:HttpClient) { }
  genOneDayMealPlan(){
    return this.http.get<MealPlanPerDay>(this.url+"gen-meals-for-one-day")
  }
  getMealPlanOfPerson(){
    return this.http.get<MealPlanPerDay[]>(this.url+"get-meal-plan-of-person")
  }
  countPerDayPerUser() {
    return this.http.get<number>(this.url+"count-per-day-per-user");
  }
  delFromLast(){
    return this.http.delete<void>(this.url+"delete-from-last")
  }
  genRandomOnExistingId(mealPlanPerDay:MealPlanPerDay){
    return this.http.put<any>(this.url+"gen-random-on-existing-id",mealPlanPerDay)
  }
}
