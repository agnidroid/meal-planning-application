import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteRecipeService {
  favoriteRecipes: any[] = [];

  addToFavoritesRecipe(recipe: any) {
    // Check if the recipe is already in favorites to avoid duplicates
    if (!this.isRecipeInFavorites(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
    // console.log(this.favoriteRecipes);
  }

  // removeFromFavorites(recipe: any) {
  //   // Remove the recipe from favorites
  //   const index = this.favoriteRecipes.findIndex((favRecipe) => favRecipe.id === recipe.id);
  //   if (index !== -1) {
  //     this.favoriteRecipes.splice(index, 1);
  //   }
  // }

  isRecipeInFavorites(recipe: any): boolean {
    return this.favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id);
  }
}
