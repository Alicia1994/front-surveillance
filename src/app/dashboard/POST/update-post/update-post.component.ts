import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategorieService } from 'src/app/services/categorie.service';
import { AddPostService } from '../../../services/post.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  userFile;
  imgURL: any;
  updatePostForm: FormGroup;
  id: number;
  username: string;
  sub: Subscription;
  categories: [] = [];
  public imagePath;



  constructor(
    private addPostService: AddPostService,
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private categorieService: CategorieService,
    private fb: FormBuilder) {
    this.updatePostForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.initForm();
    this.categorieService.findAll().subscribe((data: any) => {
      this.categories = data;
    })

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.addPostService.findById(this.id).subscribe(post => {
        this.id = post.id;
        this.updatePostForm.patchValue(post);
        this.username = post.username;
      })
    })
  }

  initForm() {
    this.updatePostForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
      id: new FormControl(0),
      username: new FormControl(''),
      categorie: this.fb.group({ id: new FormControl('') }),
      image: new FormControl('')
    });
  }

  updatePost() {
    const formData = new FormData();
    const newPost = this.updatePostForm.value;
    formData.append('file', this.userFile);
    formData.append("post", new Blob([JSON.stringify(newPost)], { type: "application/json" }));

    this.adminService.update(formData).subscribe(
      resp => {
        console.log("modification effectuée")
        this.router.navigateByUrl("/admin/handle-post")
      }
    )
  }


  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var reader = new FileReader();
      this.imagePath = file;
      console.log(file);
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }

}
