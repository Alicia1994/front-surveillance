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

  updatePostForm: FormGroup;
  id: number;
  username: string;
  sub: Subscription;
  categories: [] = [];  


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
    this.categorieService.findAll().subscribe((data : any) => {
      this.categories = data;
    })

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      
      this.addPostService.findById(this.id).subscribe(post => {
        this.id = post.id;
        
        this.updatePostForm.setValue({
          title: post.title,
          content: post.content,
          id: post.id,
          username: post.username,
          categorie: post.categorie
        
        })
       this.username = post.username;
      })
    })
 
  }

  initForm(){
    this.updatePostForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
      id: new FormControl(0),
      username: new FormControl(''),
      categorie: this.fb.group({id: new FormControl('')})

    });
  }

  updatePost(){

    const formValues = {
      id:this.id,
      title: this.updatePostForm.value.title,
      content: this.updatePostForm.value.content,
      username: this.username,
      categorie: this.updatePostForm.value.categorie
    }  
    
    this.adminService.update(formValues).subscribe(
      resp => {
        console.log("modification effectuée")
       this.router.navigateByUrl("/admin/handle-post")
      }
    )
  }

}
