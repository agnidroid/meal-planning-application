import { Component,Input } from '@angular/core';
import { FavoriteRecipeService } from 'src/app/service/favorite-recipe.service';


@Component({
  selector: 'app-favorite-recipe',
  templateUrl: './favorite-recipe.component.html',
  styleUrls: ['./favorite-recipe.component.css'],
})
export class FavoriteRecipeComponent {
 constructor(private favoriteRecipeService : FavoriteRecipeService){}
 favRecipe : any =this.favoriteRecipeService.favoriteRecipes;
}
