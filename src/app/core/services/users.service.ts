import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, tap, noop } from 'rxjs';
import { User } from '../models/user';
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
    let url = `${BASE_URL}/users`;

    if (page) {
      url = `${url}?page=${page}`;
    }

    this.http
      .get<any>(url)
      .pipe(
        catchError((error) => error),
        tap((data) => console.log(data)),
        map((res) => {
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
}
