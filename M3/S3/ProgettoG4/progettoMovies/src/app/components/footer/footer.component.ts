import { Component } from '@angular/core';
import { AuthguardService } from '../../Auth/authguard.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  show:boolean = false
  isUserLoggedIn:boolean = false;

  constructor(private authSvc:AuthguardService){}

  ngOnInit(){

    this.authSvc.isLoggedIn$.subscribe(data => {

      this.isUserLoggedIn = data;

    })

}}
