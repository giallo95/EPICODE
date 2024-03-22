import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FordComponent } from './pages/ford/ford.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { AudiComponent } from './pages/audi/audi.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FordComponent,
    FiatComponent,
    AudiComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
