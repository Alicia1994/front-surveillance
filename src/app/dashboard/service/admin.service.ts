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

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  postSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.baseUrl}/admin`;

  create(formData: FormData) {
    return this.httpClient.post(this.baseUrl, formData);
  }

  getPostsByUsername(username: string) {
    this.httpClient.get<Array<Post>>(`${this.baseUrl}/books/${username}`).subscribe(resp => {
      this.postSubject.next(resp);
    }
    );
  }

  update(formData: FormData) {
    return this.httpClient.put<Post>(this.baseUrl, formData)
  }

  delete(idPost: Number): Observable<Post> {
    return this.httpClient.delete<Post>(this.baseUrl + '/' + idPost)
  }

}