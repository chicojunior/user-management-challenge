import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL, TOKEN_TIMEOUT } from 'src/app/core/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  tokenExpirationTimeout: any;

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  login(user: any) {
    return this.http.post<any>(`${BASE_URL}/login`, user);
  }

  setToken(token: any) {
    localStorage.setItem('token', token);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
    clearTimeout(this.tokenExpirationTimeout);
  }

  setTokenExpirationTimeout() {
    this.tokenExpirationTimeout = setTimeout(() => {
      this.logOut();
    }, TOKEN_TIMEOUT);
  }
}
