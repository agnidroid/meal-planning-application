package in.stackroute.planning_meal.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import in.stackroute.planning_meal.model.generateMealPlan.Meal;
import in.stackroute.planning_meal.model.generateMealPlan.MealResponse;
import in.stackroute.planning_meal.model.generateMealPlan.Nutrients;
import in.stackroute.planning_meal.model.recipeDetails.RecipeResponse;
import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanEach;
import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanPerDay;
import in.stackroute.planning_meal.repository.MealPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class MealService {
    @Autowired
    private final MealPlanRepository mealPlanRepository;
    @Autowired
    private RestTemplate restTemplate;
    public Object genOneDayMealPlan() {
        int count=countPerDayPerUser(100);
        if(count<3){return genAndStoreMeal();}
        return "Count Exceeded";
// Create an ObjectMapper instance
    }


    public Object genOneWeekMealPlan() {
        String url="https://api.spoonacular.com/mealplanner/generate?apiKey=c630e262bbaf4b6eaad75bb7747ce9f4" +
                "&timeFrame=week&targetCalories=2000";
        HttpHeaders headers=new HttpHeaders();
        return restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class).getBody();
    }
    public Object genAndStoreMeal(){
        String url1="https://api.spoonacular.com/mealplanner/generate?apiKey=c630e262bbaf4b6eaad75bb7747ce9f4" +
                "&timeFrame=day&targetCalories=2000";
        HttpHeaders headers=new HttpHeaders();
        String json= restTemplate.exchange(url1, HttpMethod.GET, new HttpEntity<>(headers), String.class).getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // Deserialize the JSON data into a MealResponse object
            MealResponse mealResponse = objectMapper.readValue(json, MealResponse.class);

            // Access the meals and nutrients from the MealResponse object
            List<Meal> meals = mealResponse.getMeals();
            MealPlanPerDay mealPlanPerDay=new MealPlanPerDay();
            mealPlanPerDay.setUserId(100);
            // Now you can work with the meals and nutrients objects
            List<MealPlanEach> listMeals=new ArrayList<>();
            for (Meal meal : meals) {
                MealPlanEach mealPlanEach=new MealPlanEach();
                mealPlanEach.setName(meal.getTitle());
                mealPlanEach.setServings(meal.getServings());
                mealPlanEach.setCalories(0);
                String image_url="https://spoonacular.com/recipeImages/"+Integer.toString(meal.getId())+"-312x231.jpg";
                mealPlanEach.setImage(image_url);
                listMeals.add(mealPlanEach);
            }
            mealPlanPerDay.setMealPlanEachList(listMeals);
            mealPlanPerDay.setTotalCalories(mealResponse.getNutrients().getCalories());
            mealPlanRepository.save(mealPlanPerDay);
            return mealPlanPerDay;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return json;
    }
    public int countPerDayPerUser(int userId){
        List<MealPlanPerDay> mealPlanPerDayList=findByExampleAndQueryFunction("userId",100);
        return mealPlanPerDayList.size();
    }
    public List<MealPlanPerDay> findByExampleAndQueryFunction(String fieldName, Object value) {
        return mealPlanRepository.findByExampleAndQueryFunction(fieldName, value);
    }

    public Object getMealPlanOfPerson() {
        return findByExampleAndQueryFunction("userId",100);
    }
    public void deleteFromLast(){
        List<MealPlanPerDay> mealPlanPerDayList=findByExampleAndQueryFunction("userId",100);
        int l=mealPlanPerDayList.size();
        if(l>0){
            org.bson.types.ObjectId id=mealPlanPerDayList.get(l-1).getId();
            mealPlanRepository.deleteById(id.toString());
        }
    }
    public void genRandomOnExistingId( MealPlanPerDay mealPlanPerDay) throws JsonProcessingException {
//        org.bson.types.ObjectId id=mealPlanPerDay.getId();
//        Optional<MealPlanPerDay> mealPlanPerDayOld=mealPlanRepository.findById(id.toString());
//        MealPlanPerDay mealPlanPerDayOldNew=mealPlanPerDayOld.get();
//            String url1="https://api.spoonacular.com/mealplanner/generate?apiKey=c630e262bbaf4b6eaad75bb7747ce9f4" +
//                    "&timeFrame=day&targetCalories=2000";
//            HttpHeaders headers=new HttpHeaders();
//            String json= restTemplate.exchange(url1, HttpMethod.GET, new HttpEntity<>(headers), String.class).getBody();
//            ObjectMapper objectMapper = new ObjectMapper();
//            MealResponse mealResponse = objectMapper.readValue(json, MealResponse.class);
//
//            // Access the meals and nutrients from the MealResponse object
//            List<Meal> meals = mealResponse.getMeals();
//            List<MealPlanEach> listMeals=new ArrayList<>();
//            for (Meal meal : meals) {
//                MealPlanEach mealPlanEach=new MealPlanEach();
//                mealPlanEach.setName(meal.getTitle());
//                mealPlanEach.setServings(meal.getServings());
//                mealPlanEach.setCalories(0);
//                String image_url="https://spoonacular.com/recipeImages/"+Integer.toString(meal.getId())+"-312x231.jpg";
//                mealPlanEach.setImage(image_url);
//                listMeals.add(mealPlanEach);
//            }
//            mealPlanPerDayOldNew.setMealPlanEachList(listMeals);
            mealPlanPerDay.setTotalCalories(0);
            mealPlanRepository.save(mealPlanPerDay);
        }


}

//         String url="https://api.spoonacular.com/mealplanner/generate?apiKey=c630e262bbaf4b6eaad75bb7747ce9f4" +
//                "&timeFrame=day&targetCalories=2000";
