import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isLogged()) {
      this.router.navigate(['user', this.userService.getUserName()]);
      return false;
    }
    return true;
  }
}
