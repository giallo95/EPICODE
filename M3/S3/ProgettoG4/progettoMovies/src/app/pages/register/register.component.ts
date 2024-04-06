import { Component } from '@angular/core';
import { AuthguardService } from '../../Auth/authguard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthguardService) {}

  register() {
    this.authService.register(this.formData).subscribe(
      (response) => {
        console.log('Registrazione avvenuta con successo', response);
        // Puoi gestire la risposta dal backend o reindirizzare l'utente
      },
      (error) => {
        console.error('Errore durante la registrazione', error);
        // Gestisci l'errore in base alle tue esigenze
      }
    );
  }
}
