import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './pages/active-post/active-post.component';
import { InactivePostComponent } from './pages/inactive-post/inactive-post.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },



  {
    path:'active-post',
    component: ActivePostComponent
  },

  {
    path:'inactive-post',
    component: InactivePostComponent
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
