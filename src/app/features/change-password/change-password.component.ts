import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/services/auth.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private router = inject(Router);
  loading: boolean = false;
  changePasswordForm!: FormGroup;

  ngOnInit(): void {
    this.changePasswordFormInit();
  }

  // ----------------create form group function ----------
  changePasswordFormInit(): void {
    this.changePasswordForm = this.fb.group(
      // ---------- first object  ( user data {object} )---------
      {
        password: ['', [Validators.required]],
        newPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
          ],
        ],
        confirmPasswordInput: ['', [Validators.required]],
      },
      // -------------second object >>>>>>>> call custom validation function --------
      { validators: [this.confirmPasswordfun] },
    );
  }
  // ------------------- submit  change password  form----------

  submitChangePasswordForm(): void {
    // console.log(this.changePasswordForm.value);

    if (this.changePasswordForm?.valid) {
      this.loading = true;
      delete this.changePasswordForm.value.confirmPasswordInput;
      console.log(this.changePasswordForm.value);
      this.authService.changePassword(this.changePasswordForm.value).subscribe({
        next: (res) => {
          if (res.success) {
            localStorage.clear();
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
          }
        },

        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.loading = false;
        },
      });
    } else {
      this.changePasswordForm.markAllAsTouched();
    }
  }

  // ----------------- custom validation repassword  ----------
  confirmPasswordfun(group: AbstractControl) {
    const newpassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPasswordInput')?.value;
    if (newpassword !== confirmPassword && newpassword !== '') {
      group.get('confirmPasswordInput')?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      return null;
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

  // --------------- show New  password icon --------
  showNewPassword(element: HTMLInputElement): void {
    if (element.type === 'password') {
      element.type = 'text';
    } else {
      element.type = 'password';
    }
  }

  // --------------- show confirm  password icon --------
  showConfirmPassword(element: HTMLInputElement): void {
    if (element.type === 'password') {
      element.type = 'text';
    } else {
      element.type = 'password';
    }
  }
}
