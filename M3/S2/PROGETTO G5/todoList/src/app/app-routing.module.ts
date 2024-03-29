import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { UncompleteComponent } from './pages/uncomplete/uncomplete.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'complete',
    component: CompleteComponent
  },
  {
    path: 'uncomplete',
    component: UncompleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
