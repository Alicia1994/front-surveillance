import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtAutResponse } from '../auth/jwt-aut-response';
import { LoginPayload } from '../auth/login-payload';
import { SignupPayload } from '../auth/signup-payload';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/api/auth/"

  private jwtHelper = new JwtHelperService();

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService) { }

  signup(signupPayload: SignupPayload): Observable<any> {
    return this.httpClient.post(this.url + "signup", signupPayload);
  }

  signupAdmin(signupPayload: SignupPayload): Observable<any> {
    return this.httpClient.post(this.url + "signup/admin", signupPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    const token = this.localStorageService.retrieve("authenticationToken");
    const decode = this.jwtHelper.decodeToken(token);
    return this.httpClient.post<JwtAutResponse>(this.url + 'login', loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }

  getUserUsername() {
    return this.localStorageService.retrieve("username") != null;
  }

  isAuthenticated(): Boolean {
    return this.localStorageService.retrieve("authenticationToken") !== null;
  }

  isTokenExpired(): Boolean{
    const token = this.localStorageService.retrieve("authenticationToken");
  return this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
    this.router.navigate(['/connexion']);
  }

  getUserToken() {
    const token = this.localStorageService.retrieve("authenticationToken");
    const decode = this.jwtHelper.decodeToken(token);
    if (decode !== null) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        return { ...decode, token };
      } else {
        this.localStorageService.clear('authenticationToken');
        this.router.navigate(['/connexion'])
      }
    }
    return null;
  }

}