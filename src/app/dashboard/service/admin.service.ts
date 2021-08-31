import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtAutResponse } from '../../auth/jwt-aut-response';
import { LoginPayload } from '../../auth/login-payload';
import { SignupPayload } from '../../auth/signup-payload';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
import { Post } from '../../models/post-payload';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  postSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) { }

  baseUrlAdmin = `${environment.baseUrl}/admin`;


  // ****** API requests for articles ******
  create(formData: FormData) {
    return this.httpClient.post(this.baseUrlAdmin, formData);
  }

  update(formData: FormData) {
    return this.httpClient.put<Post>(this.baseUrlAdmin, formData)
  }

  delete(idPost: Number): Observable<Post> {
    return this.httpClient.delete<Post>(this.baseUrlAdmin + '/' + idPost)
  }

    // ****** API requests for users and admin ******
  findAllUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.baseUrlAdmin + '/list/users' );
  }

  findAllAdmin(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.baseUrlAdmin+ '/list/admins' );
  }

  deleteUser(idUser: Number): Observable<User> {
    return this.httpClient.delete<User>(this.baseUrlAdmin + '/user/' + idUser)
  }

  deleteAdmin(idAdmin: Number): Observable<User>{
    return this.httpClient.delete<User>(this.baseUrlAdmin + '/delete/' + idAdmin)
  }


}