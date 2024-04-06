import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Users } from '../Models/users';
import { LoginData } from '../Models/login-data';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


type AccessData = {
  accessToken:string,
  user:Users
}

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  jwtHelper:JwtHelperService = new JwtHelperService()
  authSubject = new BehaviorSubject<Users|null>(null);

  user$ = this.authSubject.asObservable()
  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user =>  this.syncIsLoggedIn = user)
    )

  syncIsLoggedIn:boolean = false;

  constructor(
    private http:HttpClient,
    private router:Router
    ) {

      this.restoreUser()

    }

    private registerUrl = 'http://localhost:3000/register';
    private loginUrl = 'http://localhost:3000/login';



    register(newUser: Partial<Users>): Observable<AccessData> {
      return this.http.post<AccessData>(this.registerUrl, newUser);
    }

    login(loginData: LoginData): Observable<AccessData> {
      return this.http.post<AccessData>(this.loginUrl, loginData)
        .pipe(
          tap(data =>  {

      this.authSubject.next(data.user)
      localStorage.setItem('accessData', JSON.stringify(data))

      this.autoLogout(data.accessToken)

    }))
  }
  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();


    setTimeout(()=>{
      this.logout()
    },expMs)
  }

  logout(){

    this.authSubject.next(null)
    localStorage.removeItem('accessData')

    this.router.navigate(['/pages/login'])

  }


  restoreUser(){

    const userJson = localStorage.getItem('accessData')
    if(!userJson) return;

    const accessData:AccessData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;


    this.authSubject.next(accessData.user)
    this.autoLogout(accessData.accessToken)

  }
}
