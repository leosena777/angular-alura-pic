import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.isLogged()) {
      this.router.navigate([''], {
        queryParams: {
          fromUrl: state.url,
        },
      });
      return false;
    }
    return true;
  }
}
