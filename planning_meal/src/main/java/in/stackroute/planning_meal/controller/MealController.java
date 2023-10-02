package in.stackroute.planning_meal.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanPerDay;
import in.stackroute.planning_meal.service.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/meal")

public class MealController {

    private final MealService mealService;
    @Autowired
    public MealController(MealService mealService){
        this.mealService=mealService;
    }
    @GetMapping("/gen-meals-for-one-day/Calories={totalCalories}")
    public ResponseEntity<?> genOneDayMealPlan(@PathVariable int totalCalories){

        return ResponseEntity.ok(mealService.genOneDayMealPlan(totalCalories));
    }
    @GetMapping("/get-meal-plan-of-person")
    public  ResponseEntity<?> getMealPlanOfPerson(){
        return ResponseEntity.ok(mealService.getMealPlanOfPerson());
    }

    @GetMapping("/count-per-day-per-user")
    public  ResponseEntity<?> countPerDayPerUser(){
        return ResponseEntity.ok(mealService.countPerDayPerUser(100));
    }
    @DeleteMapping("/delete-from-last")
    public void deleteFromLast(){
        mealService.deleteFromLast();
    }
    @PutMapping("/gen-random-on-existing-id")
    public void genRandomOnExistingId(@RequestBody MealPlanPerDay mealPlanPerDay)  {
        mealService.genRandomOnExistingId(mealPlanPerDay);
    }
    @DeleteMapping("/del-from-first")
    public void deleteFromFirst(){
        mealService.deleteFromFirst();
    }
}
