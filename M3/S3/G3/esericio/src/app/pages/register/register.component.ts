import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    if (this.password !== this.confirmPassword) {
      alert("Le password non corrispondono");
      return;
    }

    this.authService.register(this.username, this.password)
      .subscribe((response: any) => {

        console.log("Registrazione avvenuta con successo", response);
        this.router.navigate(['/login'])
      }, (error: any) => {
        console.error("Errore durante la registrazione", error);

      });
  }
}
