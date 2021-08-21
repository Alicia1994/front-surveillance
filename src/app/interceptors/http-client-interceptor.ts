import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor(private $localStorage: LocalStorageService, private router : Router) {
  }

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.$localStorage.retrieve("authenticationToken");
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + token)
      });
      return next.handle(cloned).pipe(catchError(x=> this.handleError(x)));
    }
    else {
      return next.handle(req);
    }
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403 || err.status === 404) {
      localStorage.clear();
      this.router.navigateByUrl(`/home`);    
    }
    return null;
}

}