import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MealPlansComponent } from './meal-plans/meal-plans.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './profile/logout/logout.component';
import { AccountSettingComponent } from './profile/account-setting/account-setting.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'meal-plans', component: MealPlansComponent },
  { path: 'recipes', component: RecipesComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'account-settings', component: AccountSettingComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
