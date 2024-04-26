import { HttpResponse, type HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';
export const timingInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = Date.now();
  const clonedRequest = req.clone();

  return next(clonedRequest).pipe(

    tap((event) => {
      if (event instanceof HttpResponse) {

        const endTime = Date.now();
        const duration = endTime - startTime;

        console.log(`İstek tamamlandı: ${duration} ms`);
      }
    }));
};
