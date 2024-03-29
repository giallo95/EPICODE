import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { UncompleteComponent } from './pages/uncomplete/uncomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompleteComponent,
    UncompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
