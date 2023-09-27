package in.stackroute.planning_meal.repository;

import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanPerDay;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealPlanRepository extends MongoRepository<MealPlanPerDay,String> {
    @Query("{ ?0: ?1 }")
    List<MealPlanPerDay> findByExampleAndQueryFunction(String feildName, Object value);
}
