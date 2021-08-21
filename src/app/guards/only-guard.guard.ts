import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RoleGuard } from './role.guard';

export function isOnlyGuard (authService : AuthService, router : Router){
  return new RoleGuard(router, authService)
}


export const onlyGuard = {
  provide: "onlyGuard",
  useFactory: isOnlyGuard,
  deps: [
    AuthService,
    Router
  ]

};



