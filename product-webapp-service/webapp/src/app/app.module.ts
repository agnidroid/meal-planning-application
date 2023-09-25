import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryComponent } from './component/category/category.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule } from 'ngx-pagination';


import { DescriptionModalComponent } from './component/description-modal/description-modal.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { SidebarComponent } from './component/shared/sidebar/sidebar.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import { SearchRecipeComponent } from './component/search-recipe/search-recipe.component';
import { FavoriteRecipeComponent } from './component/favorite-recipe/favorite-recipe.component';
import { MyFoodComponent } from './component/my-food/my-food.component';



@NgModule({
  declarations: [
    AppComponent,

    CategoryComponent,
    DescriptionModalComponent,
    HeaderComponent,
    SidebarComponent,
    SearchRecipeComponent,
    FavoriteRecipeComponent,
    MyFoodComponent,
    RecipeComponent
    
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule, // Add MatDialogModule to the imports array
    MatToolbarModule, // Add MatToolbarModule here
    MatSidenavModule, // Import MatSidenavModule
    MatInputModule,
    NgxPaginationModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
