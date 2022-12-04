import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit, OnDestroy {
  users: any[] = [];
  currentPage = 0;
  totalPages = 0;
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private usersService: UsersService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.usersService.fetchUsers();
    this.subscriptions.push(
      this.usersService.usersList.subscribe((list) => {
        this.isLoading = false;
        this.users = list;
      }),
      this.usersService.currentPage.subscribe(
        (page) => (this.currentPage = page)
      ),
      this.usersService.totalPages.subscribe(
        (total) => (this.totalPages = total)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  loadMore() {
    const page = this.currentPage + 1;
    if (!(page > this.totalPages)) {
      this.usersService.fetchUsers(page);
    }
  }
}
