import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  private jwtHelper = new JwtHelperService();

  constructor(private router: Router, private authService: AuthService) {
  }

  //****** Permission of the ADMIN ******//
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const routerRoles = route["data"].roles;
    const token = this.authService.getUserToken();
    
    if (token != null) {
      token.role[0].authority;
      const roles = this.authService.getUserToken().role;
      const isAllowed = !!roles.find(role => routerRoles.indexOf(role.authority) > -1);

      if (token == "ADMIN") {
        return true;
      }
      return isAllowed ? true: false;

    } else {
      this.router.navigate(["/connexion"]);
    }
  }
}
