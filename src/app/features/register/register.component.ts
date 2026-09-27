import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);

  // ---- errorMsg submit form -------
  errorMsg: string = '';
  // -------------- flag loading spinner icon -----------
  loading: boolean = false;
  // private storageService = inject(StorageService);
  private router = inject(Router);
  // --------------- object (user data )-----------------
  registerForm!: FormGroup;
  registerSub$: Subscription = new Subscription();
  ngOnInit(): void {
    this.registerFormInit();
  }

  // ----------------create form group function ----------
  registerFormInit(): void {
    this.registerForm = this.fb.group(
      // ---------- first object  ( user data {object} )---------
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
          ],
        ],
        rePassword: ['', [Validators.required]],
      },
      // -------------second object >>>>>>>> call custom validation function --------
      { validators: [this.confirmPassword] },
    );
  }

  // ----------------- custom validation repassword  ----------
  confirmPassword(group: AbstractControl) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    if (password !== rePassword && rePassword !== '') {
      group.get('rePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      return null;
    }
  }
  // ------------ submit form function ---------
  submitForm(): void {
    if (this.registerForm.valid) {
      // -------------- show spinner icon -----------
      this.loading = true;
      this.registerSub$.unsubscribe();
      // ------------- send user data -------------
      this.registerSub$ = this.authService.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          if (res.success) {
            // console.log(res);
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
          }
        },
        error: (err) => {
          // console.log(err.error.message);
          this.errorMsg = err.error.message;
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
      // console.log(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  // --------------- show password icon --------
  showPassword(element: HTMLInputElement): void {
    if (element.type === 'password') {
      element.type = 'text';
    } else {
      element.type = 'password';
    }
  }

  // --------------- show password icon --------
  showRepassword(element: HTMLInputElement): void {
    if (element.type === 'password') {
      element.type = 'text';
    } else {
      element.type = 'password';
    }
  }
}
