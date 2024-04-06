import { Component } from '@angular/core';
import { AuthguardService } from '../../Auth/authguard.service';
import { Users } from '../../Models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  registerData:Partial<Users> = {}

  constructor(
    private authSvc:AuthguardService,
    private router:Router
    ){}

  register(){
    this.authSvc.register(this.registerData)
    .subscribe(data=> {

      this.router.navigate([''])

    })
  }}
