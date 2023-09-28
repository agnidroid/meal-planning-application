import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  rxTime = new Date();
  meals:any;
  hour: any
  constructor(private notify: NotificationService) { }

  ngOnInit(): void {
    this.shownoti();
            setTimeout(() => {
                this.shownoti(); 
                }, 5000);

    this.hour = this.rxTime.getHours();

  }


  shownoti(){
    this.notify.fetchMeal().subscribe((data)=>{
      this.meals = data;
      console.log(this.meals);
      console.log(this.meals.title);
      var title = JSON.stringify(this.meals.title)
      var mealb = JSON.stringify(this.meals.meal.breakfast)
      var meall = JSON.stringify(this.meals.meal.lunch)
      var meald = JSON.stringify(this.meals.meal.dinner)

      if(this.hour > 7 && this.hour < 12){
        this.notify.ShowHTMLsuccess("<h6>"+ mealb +"</h6>", title);
      }

      if(this.hour > 11 && this.hour < 15){
        this.notify.ShowHTMLsuccess("<h6>"+ meall +"</h6>", title);
      }

      if(this.hour > 15 && this.hour < 23){
        this.notify.ShowHTMLsuccess("<h6>"+ meald +"</h6>", title);
      }
      console.log(this.hour)
    })
  }

}
