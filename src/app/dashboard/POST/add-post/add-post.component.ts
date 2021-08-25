import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddPostService } from '../../../services/post.service';
import { Post } from '../../../models/post-payload';
import { AdminService } from '../../service/admin.service';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'ngx-webstorage';
import { CategorieService } from 'src/app/services/categorie.service';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  post: Post;
  currentUsername?: any;
  categories: [] = [];  

  constructor(
    private addpostService: AddPostService,
    private router: Router,
    private adminService: AdminService,
    private localStorageService : LocalStorageService, 
    private userService: UserService,
    private categorieService: CategorieService,
    private fb: FormBuilder) {

    this.addPostForm = new FormGroup({});
  }

  ngOnInit() {
    this.initForm();
    this.categorieService.findAll().subscribe((data : any) => {
      this.categories = data;
    })
  }

  initForm() {
    this.addPostForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
      categorie: this.fb.group({id: new FormControl('')})
    })
  }

  addPost() {
    const newPost = this.addPostForm.value;
    console.log(newPost);

    // this.post.content = this.addPostForm.get('content').value;
    // this.post.title = this.addPostForm.get('title').value;
    // this.post.categorie = this.addPostForm.get('categorie').value;
    this.currentUsername = this.localStorageService.retrieve("username");
    this.adminService.create(newPost).subscribe(data => {

      
      console.log(data);
      // this.userService.addUserInPost(this.currentUsername, this.post).subscribe(resp => {
      //   console.log('Post ajouté à la liste de l\'utilisateur');
      //   this.adminService.getPostsByUsername(this.currentUsername);

        this.router.navigateByUrl('/admin/handle-post');
      // })
      
      }, error => {
        console.log('Failure Response');
      })
    }
  }