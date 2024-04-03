import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form validation failed!');
    }
  }

  userForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted successfully!');
      console.log('Form data:', this.userForm.value);
    } else {
      console.log('Form validation failed!');
    }
  }
}
