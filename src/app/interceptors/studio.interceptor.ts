import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudioInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var authorization = "Authorization";
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {

          let token = sessionStorage.getItem("token")|| '';
          request = request.clone({
            setHeaders:{
              Authorization: token
            }
          })
        }
    return next.handle(request);
  }
}
