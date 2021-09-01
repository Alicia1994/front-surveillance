import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddPostService } from '../../../services/post.service';
import { Post } from '../../../models/post-payload';
import { AdminService } from '../../service/admin.service';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'ngx-webstorage';
import { CategorieService } from 'src/app/services/categorie.service';
import { Categorie } from 'src/app/models/categorie';
import { environmentApi } from 'src/environments/environment';

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
  userFile;
  public imagePath;
  imgURL: any;


  constructor(
    private addpostService: AddPostService,
    private router: Router,
    private adminService: AdminService,
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private categorieService: CategorieService,
    private fb: FormBuilder) {
    this.addPostForm = new FormGroup({});
  }

  /****** API request to call all users ******/
  ngOnInit() {
    this.initForm();
    this.categorieService.findAll().subscribe((data: any) => {
      this.categories = data;
    })
  }

    /****** Form to register the user's informations ******/
  initForm() {
    this.addPostForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      categorie: this.fb.group({ id: new FormControl('') }),
    })
  }

    /****** New Form to send users infos & an image ******/
  addPost() {
    const formData = new FormData();
    const newPost = this.addPostForm.value;
    formData.append('file', this.userFile);
    formData.append('post', new Blob([JSON.stringify(newPost)], { type: "application/json" }))
    this.currentUsername = this.localStorageService.retrieve("username");
    this.adminService.create(formData).subscribe(data => {
      this.router.navigateByUrl('/admin/handle-post');
    }, error => {
      console.log('Failure Response');
    })
  }

      /****** Function to display the image ******/
  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }

}