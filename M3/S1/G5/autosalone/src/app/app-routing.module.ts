import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FordComponent } from './pages/ford/ford.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { AudiComponent } from './pages/audi/audi.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent
  },

  {
    path:'ford',
    component: FordComponent
  },

  {
    path:'fiat',
    component: FiatComponent
  },

  {
    path:'audi',
    component: AudiComponent
  },

  {
    path:'**',
    component: Pagina404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
