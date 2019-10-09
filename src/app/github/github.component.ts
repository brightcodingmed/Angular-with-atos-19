import { GitUserService } from './../git-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  users: any[] = [];
  search = '';
  constructor(private gitUserService: GitUserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.gitUserService._getUsers()
        .subscribe((response: any[]) => {
          this.users = response;
          console.log(response);
        });
  }

  searchUsers() {
    this.gitUserService._searchUsers(this.search)
        .subscribe((res: any) => {
          this.users = res.items;
        });
  }

}
