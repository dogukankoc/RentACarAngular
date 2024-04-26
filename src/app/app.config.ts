import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authInterceptor } from './shared/intercepters/auth.interceptor';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])), // HttpClient'ı kullanabilmek için ekledik
  ],
};
