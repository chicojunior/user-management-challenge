import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit, OnDestroy {
  users: any = [];
  currentPage = 0;
  totalPages = 0;
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private usersService: UsersService, private router: Router) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.usersService.fetchUsers();
    this.subscriptions.push(
      this.usersService.usersList.subscribe((list: any[]) => {
        this.isLoading = false;
        console.log(this.users);
        this.users = this.removeDuplicates(list);
        console.log(this.users);
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

  goToAddPage() {
    this.router.navigate(['home/users/add']);
  }

  loadMore() {
    const page = this.currentPage + 1;
    if (!(page > this.totalPages)) {
      this.usersService.fetchUsers(page);
    }
  }

  private removeDuplicates(list: any[]) {
    const uniqueIds: any = [];
    const filteredList = list.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.id);

      if (!isDuplicate) {
        uniqueIds.push(element.id);

        return true;
      }

      return false;
    });
    return filteredList;
  }
}
