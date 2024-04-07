import { Component } from '@angular/core';
import { LoginData } from '../../Models/login-data';
import { AuthguardService } from '../../Auth/authguard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    loginData:LoginData = {
    email:'',
    password:''
  }

  constructor(
    private authSvc:AuthguardService,
    private router:Router
    ){}

    login(){

      this.authSvc.login(this.loginData)
      .subscribe(() => {
        this.router.navigate(['/'])
      })

    }

}
