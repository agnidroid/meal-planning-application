package in.stackroute.planning_meal.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanPerDay;
import in.stackroute.planning_meal.service.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/meal")
@RequiredArgsConstructor
public class MealController {
    private final MealService mealService;
    @GetMapping("/gen-meals-for-one-day")
    public ResponseEntity<?> genOneDayMealPlan(){

        return ResponseEntity.ok(mealService.genOneDayMealPlan());
    }
    @GetMapping("/get-meal-plan-of-person")
    public  ResponseEntity<?> getMealPlanOfPerson(){
        return ResponseEntity.ok(mealService.getMealPlanOfPerson());
    }
    @GetMapping("/get-meals-for-one-week")
    public ResponseEntity<?> genOneWeekMealPlan(){
        return ResponseEntity.ok(mealService.genOneWeekMealPlan());
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
    public void genRandomOnExistingId(@RequestBody MealPlanPerDay mealPlanPerDay) throws JsonProcessingException {
        mealService.genRandomOnExistingId(mealPlanPerDay);
    }
}
