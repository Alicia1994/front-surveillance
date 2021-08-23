import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddPostService } from '../../../services/post.service';
import { Post } from '../../../models/post-payload';
import { AdminService } from '../../service/admin.service';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  post: Post;
 // sub: Subscription;
  currentUsername?: any;
  // title = new FormControl('');
  // body = new FormControl('');

  constructor(private addpostService: AddPostService,
    private router: Router,
    private adminService: AdminService,
    private localStorageService : LocalStorageService, 
    private userService: UserService) {

    this.addPostForm = new FormGroup({});
    this.post = {
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addPostForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
    })
  }

  addPost() {

    this.post.content = this.addPostForm.get('body').value;
    this.post.title = this.addPostForm.get('title').value;
    this.currentUsername = this.localStorageService.retrieve("username");

    this.adminService.create(this.post).subscribe(data => {
      console.log(data);
      this.userService.addUserInPost(this.currentUsername, this.post).subscribe(resp => {
        console.log('Post ajouté à la liste de l\'utilisateur');
        this.adminService.getPostsByUsername(this.currentUsername);

        this.router.navigateByUrl('/admin/handle-post');
      })
      
      }, error => {
        console.log('Failure Response');
      })
    }
  }