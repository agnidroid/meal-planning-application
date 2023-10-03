import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetResultComponent } from './get-result/get-result.component';

const routes: Routes = [
  {path: 'api/v1/dieters/:id', component: GetResultComponent},
  {path: 'dieter/:id', component: GetResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
