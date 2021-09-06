import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post';
import { User } from '../models/user';
import { AddPostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit {

  boolean = true;
  users$: Observable<Array<User>>;
  posts$: Observable<Array<Post>>;

  constructor(
    private adminService: AdminService,
    private postService: AddPostService) { }

  ngOnInit() {
    this.users$ = this.adminService.findAllUsers()
    this.posts$ = this.postService.findAll()
  }

  switchAdmin() {
    this.boolean = false;
  };

  switchUser() {
    this.boolean = true;
  }

}
