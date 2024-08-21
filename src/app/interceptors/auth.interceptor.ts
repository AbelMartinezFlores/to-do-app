import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //ontenemos el token del sessionStorage
    const token = sessionStorage.getItem('token');

    var request = req;

    //calidamos si el token existe
    if(token) {
      //clonamos el token y lo inyectamos en la cabecera de todas las peticiones HTTP
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }
    
    return next.handle(request);
  }
}
