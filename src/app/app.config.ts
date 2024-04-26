import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authInterceptor } from './shared/intercepters/auth.interceptor';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './shared/intercepters/error.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { timingInterceptor } from './shared/intercepters/timing.interceptor';
import { loadingOverlayInterceptor } from './shared/intercepters/loading-overlay.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor, timingInterceptor, loadingOverlayInterceptor])), // HttpClient'ı kullanabilmek için ekledik
    provideAnimations(), 
    provideToastr()
  ],
};
