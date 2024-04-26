import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequest = req.clone();
  const toastrService = inject(ToastrService);
  return next(newRequest) 
    .pipe( 
      catchError((error: any) => {
        toastrService.error(error.message)
        throw error;
      })
    )
};
