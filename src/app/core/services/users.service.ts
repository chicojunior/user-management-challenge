import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  tap,
  noop,
  throwError,
} from 'rxjs';
import { BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

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
        tap((data) => console.log(data)),
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

  getUserList(): Observable<any> {
    return this.usersList;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
