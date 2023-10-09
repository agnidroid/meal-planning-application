import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GetResultComponent } from './get-result/get-result.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotificationComponent } from './component/notification/notification.component';
import { MyFoodComponent } from './component/my-food/my-food.component';
import { FavoriteRecipeComponent } from './component/favorite-recipe/favorite-recipe.component';
import { SearchRecipeComponent } from './component/search-recipe/search-recipe.component';
import { CategoryComponent } from './component/category/category.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path: 'api/v1/dieters/:id', component: GetResultComponent},
  {path: 'dieter/:id', component: GetResultComponent},
  {path: "notify", component: NotificationComponent},
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