import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  noop,
  throwError,
} from 'rxjs';
import { BASE_URL } from '../constants';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private toast: HotToastService,
    private router: Router
  ) {}

  usersList = new BehaviorSubject([]);
  currentPage = new BehaviorSubject(0);
  totalPages = new BehaviorSubject(0);

  fetchUsers(page?: number) {
    let params = {};

    if (page) {
      params = {
        page,
      };
    }

    this.http
      .get(`${BASE_URL}/users`, { params: params })
      .pipe(
        catchError(this.handleError),
        map((res: any) => {
          const list = this.usersList.value.length
            ? this.usersList.value.concat(res.data)
            : res.data;

          this.currentPage.next(res.page);
          this.totalPages.next(res.total_pages);
          this.usersList.next(list);
        })
      )
      .subscribe(noop);
  }

  addUser(user: any) {
    this.http
      .post<any>(`${BASE_URL}/users`, user)
      .pipe(
        catchError(this.handleError),
        map((res: any) => {
          this.fetchUsers();
          this.toast.success('User added with success!');
        })
      )
      .subscribe(noop);
  }

  registerUser(user: any) {
    this.http
      .post<any>(`${BASE_URL}/register`, user)
      .pipe(
        catchError(this.handleError),
        map((res: any) => {
          this.toast.success('User registered with success!');
          this.router.navigate(['']);
        })
      )
      .subscribe(noop);
  }

  getUserList(): Observable<any> {
    return this.usersList;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      this.toast.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      this.toast.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
