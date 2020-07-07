import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../../services/user/user.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(private userServices: UserService, private router: Router) {
    this.user$ = userServices.getUser();
  }

  logout() {
    this.userServices.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
