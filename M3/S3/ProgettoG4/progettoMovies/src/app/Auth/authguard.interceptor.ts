import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';

export class AuthguardInterceptor implements HttpInterceptor {constructor(private authSvc:AuthguardService) {}

intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

  const accessToken = this.authSvc.getAccessToken()

  const newRequest = request.clone({
    headers: request.headers.append('Authorization', 'Bearer ' + accessToken)
  })

  return next.handle(newRequest);

}
}
