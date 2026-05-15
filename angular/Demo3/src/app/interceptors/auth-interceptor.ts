import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};

export const testInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'GET') {
    req = req.clone({
      setHeaders: {
        'X-Test-Header': 'TestValue',
      },
    });
  }

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          if (event.ok) {
            console.log('Response received:', event);
          } else {
            console.warn('Non-200 response received:', event);
          }
        }
      },
      error: (error) => {
        console.error('Error occurred:', error);
      },
    }),
  );
};

// interceptors are functions that can intercept and modify HTTP requests and responses in Angular applications.
// interceptors can make the following
// - modify the request before it is sent to the server (add header, change URL, etc.)
// - modify the response before it is passed to the application (add header, change body, etc.)
// - handle errors that occur during the request/response cycle(e.g. retry failed requests, log errors, etc.)
// - log requests and responses for debugging purposes
// - interceptors are executed in the order they are provided in the appConfig
