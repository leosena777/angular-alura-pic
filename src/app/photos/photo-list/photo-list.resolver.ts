import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { IPhoto } from '../photo/photo.type';

@Injectable({
  providedIn: 'root',
})
export class PhotoListResolver implements Resolve<Observable<IPhoto[]>> {
  constructor(private service: PhotoService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params.userName;
    return this.service.listFromUserPaginated(userName, 1);
  }
}
