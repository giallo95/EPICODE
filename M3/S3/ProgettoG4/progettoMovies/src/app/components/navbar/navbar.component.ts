import { Component } from '@angular/core';
import { AuthguardService } from '../../Auth/authguard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  show:boolean = false
  isUserLoggedIn:boolean = false;

  constructor(private authSvc:AuthguardService){}

  ngOnInit(){

    this.authSvc.isLoggedIn$.subscribe(data => {

      this.isUserLoggedIn = data;

    })

  }
}
