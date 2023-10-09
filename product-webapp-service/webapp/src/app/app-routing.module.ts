import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFoodComponent } from './component/my-food/my-food.component';
import { FavoriteRecipeComponent } from './component/favorite-recipe/favorite-recipe.component';
import { SearchRecipeComponent } from './component/search-recipe/search-recipe.component';
import { CategoryComponent } from './component/category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }, // Default route
  { path: 'search', component: SearchRecipeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'favorites', component: FavoriteRecipeComponent },
  { path: 'my-food', component: MyFoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }