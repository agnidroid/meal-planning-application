package in.stackroute.planning_meal.model.recipesToFrontEnd;

import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanEach;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;


import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "mealPlan")
public class MealPlanPerDay {
    @Id
    private org.bson.types.ObjectId id;
    private int userId;
    private List<MealPlanEach> mealPlanEachList;
    private double totalCalories;
}
