import { Component } from '@angular/core';
import { AuthguardService } from '../../Auth/authguard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  show:boolean = false
  isUserLoggedIn:boolean = false;
  films: any[] = [];

  constructor(private authSvc:AuthguardService){}

  ngOnInit(){

    this.authSvc.isLoggedIn$.subscribe(data => {

      this.isUserLoggedIn = data;

    })

    this.getFilms();
  }

  getFilms(): void {
    this.authSvc.getFilms()
      .subscribe(films => this.films = films);
  }

  }




