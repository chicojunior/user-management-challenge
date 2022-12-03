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

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.fetchUsers();
    this.usersService.usersList.subscribe((list) => (this.users = list));
    this.usersService.currentPage.subscribe(
      (page) => (this.currentPage = page)
    );
    this.usersService.totalPages.subscribe(
      (total) => (this.totalPages = total)
    );
  }

  loadMore() {}
}
