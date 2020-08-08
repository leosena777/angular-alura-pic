import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewUser } from './signup.types';

const API_URL = 'http://localhost:3000';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}
  checkUserNameTaken(userName: string) {
    console.log('teste');
    return this.http.get(API_URL + '/user/exists/' + userName);
  }

  signUp(newUser: INewUser) {
    return this.http.post(API_URL + '/user/signup', newUser);
  }
}
