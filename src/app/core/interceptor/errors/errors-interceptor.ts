import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(ToastrService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      toastrService.error(err.error.message, 'social App', {
        closeButton: true,
        timeOut: 2000,
        progressBar: true,
      });
      return throwError(() => err);
    }),
  );
};
