export class MealPlanEach {
  name: string;
  calories: number;
  servings: number;
  image: string;

  constructor(name: string="", calories: number=0, servings: number=0, image: string="") {
    this.name = name;
    this.calories = calories;
    this.servings = servings;
    this.image = image;
  }
}