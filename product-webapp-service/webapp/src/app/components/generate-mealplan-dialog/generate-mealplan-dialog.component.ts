import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MealplanService } from 'src/app/services/mealplan.service';


@Component({
  selector: 'app-generate-mealplan-dialog',
  templateUrl: './generate-mealplan-dialog.component.html',
  styleUrls: ['./generate-mealplan-dialog.component.css']
})
export class GenerateMealplanDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GenerateMealplanDialogComponent>,private mealPlanService: MealplanService) { }
  ngOnInit(): void {
  }
  totalCalories:number=0;
  genOneDayMealPlan() {
    this.mealPlanService.genOneDayMealPlan(this.totalCalories).subscribe((response) => {
      this.dialogRef.close()
    })    
  }

}
