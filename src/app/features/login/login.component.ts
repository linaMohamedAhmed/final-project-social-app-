import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);

  // ---- errorMsg submit form -------
  errorMsg: string = '';
  // -------------- flag loading spinner icon -----------
  loading: boolean = false;
  // private storageService = inject(StorageService);
  private router = inject(Router);
  // --------------- object (user data )-----------------
  loginForm!: FormGroup;
  loginSub$: Subscription = new Subscription();
  ngOnInit(): void {
    this.loginFormInit();
  }

  // ----------------create form group function ----------
  loginFormInit(): void {
    this.loginForm = this.fb.group(
      // ---------- first object  ( user data {object} )---------
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
          ],
        ],
      },
    );
  }

  // ------------ submit form function ---------
  submitForm(): void {
    if (this.loginForm.valid) {
      // -------------- show spinner icon -----------
      this.loading = true;
      this.loginSub$.unsubscribe();
      // ------------- send user data -------------
      this.loginSub$ = this.authService.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.success) {
            // ---------------- save token in localstorage -----------
            localStorage.setItem('socialToken', res.data.token);
            localStorage.setItem('userData', JSON.stringify(res.data.user));

            // console.log(res);
            setTimeout(() => {
              this.router.navigate(['/feed']);
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
      this.loginForm.markAllAsTouched();
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
}
