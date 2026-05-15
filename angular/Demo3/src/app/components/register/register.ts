import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.userRegisterForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{2,50}$/)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //   address: new FormGroup({
    //     street: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern(/^[a-zA-Z0-9\s,'-]*$/),
    //     ]),
    //     city: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    //   }),
    //   phoneNumber: new FormArray([
    //     new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    //   ]),
    // });

    this.userRegisterForm = fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{2,50}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: fb.group({
        street: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s,'-]*$/)]],
        city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      }),
      phoneNumber: fb.array([['', [Validators.required, Validators.pattern(/^\d{10}$/)]]]),
    });
  }

  get name(): FormControl | null {
    return this.userRegisterForm.get('name') as FormControl;
  }

  get email(): FormControl | null {
    return this.userRegisterForm.get('email') as FormControl;
  }

  get password(): FormControl | null {
    return this.userRegisterForm.get('password') as FormControl;
  }

  get street(): FormControl | null {
    return this.userRegisterForm.get('address.street') as FormControl;
  }

  get city(): FormControl | null {
    return this.userRegisterForm.get('address.city') as FormControl;
  }

  get phoneNumbers(): FormArray {
    return this.userRegisterForm.get('phoneNumber') as FormArray;
  }

  submit(): void {
    if (this.userRegisterForm.valid) {
      alert('Form Submitted: ' + JSON.stringify(this.userRegisterForm.value, null, 2));
      this.userRegisterForm.reset();
    } else {
      alert('Form is invalid. Please correct the errors and try again.');
    }
  }

  addPhoneNumberInput(): void {
    if (this.phoneNumbers.length >= 3) {
      alert('You can only add up to 3 phone numbers.');
      return;
    }

    // this.phoneNumbers.push(
    //   new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    // );

    this.phoneNumbers.push(
      this.fb.control('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    );
  }

  removePhoneNumberInput(): void {
    if (this.phoneNumbers.length > 1) {
      this.phoneNumbers.removeAt(this.phoneNumbers.length - 1);
    } else {
      alert('At least one phone number is required.');
    }
  }

  testUpdateForm_Patch(): void {
    this.userRegisterForm.patchValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
  }

  testUpdateForm_Set(): void {
    this.userRegisterForm.setValue({
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: 'password123',
      address: {
        street: '123 Main St',
        city: 'Anytown',
      },
      phoneNumber: ['1234567890'],
    });
  }
}
