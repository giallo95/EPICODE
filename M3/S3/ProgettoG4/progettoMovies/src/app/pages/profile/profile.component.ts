import { Component } from '@angular/core';
import { AuthguardService } from '../../Auth/authguard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userData: any;

  constructor(private authSvc: AuthguardService) { }

  ngOnInit(): void {
    this.userData = this.authSvc.getUserData();
  }
}
