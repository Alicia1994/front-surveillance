import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { JwtAutResponse } from '../../auth/jwt-aut-response';
import { LoginPayload } from '../../auth/login-payload';
import { SignupPayload } from '../../auth/signup-payload';
import {JwtHelperService} from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
import { Post } from '../../models/post-payload';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient: HttpClient) {
  }

  baseUrl = `${environment.baseUrl}/admin`;

     create(post: Post){
      return this.httpClient.post(this.baseUrl, post);
    }
  

     update(post: Post){
      return this.httpClient.put<Post>(this.baseUrl, post)
    }
  
    delete(idPost: Number):Observable<Post>{
      return this.httpClient.delete<Post>(this.baseUrl + '/' + idPost)
    }
  


}