import {
  HttpInterceptorFn,
  type HttpErrorResponse,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorResponseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError(handleErrorResponse));
};

function handleErrorResponse(
  error: HttpErrorResponse
): ReturnType<typeof throwError> {
  const errorResponse = `Error Code: ${error.status}, Message: ${error.message}`;
  return throwError(() => errorResponse);
}
