import { Injectable } from '@angular/core';

interface UserInfo {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo!: UserInfo;

  constructor() {
    this.userInfo = {
      name: 'Ginims',
    };
  }

  get isUserLoggedIn(): boolean {
    // return this.userInfo ? true : false;
    return false;
  }
}
