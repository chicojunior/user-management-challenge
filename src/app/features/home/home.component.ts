import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  currentPage = 0;
  totalPages = 0;
  isLoading = false;

  constructor(private usersService: UsersService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.usersService.fetchUsers();
    this.usersService.usersList.subscribe((list) => {
      this.isLoading = false;
      this.users = list;
    });
    this.usersService.currentPage.subscribe(
      (page) => (this.currentPage = page)
    );
    this.usersService.totalPages.subscribe(
      (total) => (this.totalPages = total)
    );
  }

  loadMore() {
    const page = this.currentPage + 1;

    if (!(page > this.totalPages)) {
      this.usersService.fetchUsers(page);
    }
  }
}
