// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { LocalStorageService } from 'ngx-webstorage';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const token = LocalStorageService.retrieve
//     .getItem("TOKEN_APPLI");
//     const newRequest = request.clone({
//       headers : request.headers.set('Authorization', `Bearer ${token}`)
//     });
//     return next.handle(newRequest);
//   }
// }
