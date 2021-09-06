import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Post } from 'src/app/models/post';
import { AddPostService } from 'src/app/services/post.service';
import { environmentApi } from 'src/environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  post: Post;
  idPost: Number;

  constructor(
    private router : Router, 
    private activatedRouter: ActivatedRoute, 
    private postService: AddPostService) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.idPost = params['id'];
    });

    this.postService.findById(this.idPost).subscribe((data:Post) => {
      this.post = data;
    },(err: any) => {
      console.log('Failure Response');  
    })
  }

  setTimeToMoment(date: string){
    const date1  = moment(date, "YYYY-MM-DD h-mm");
    const date2  = moment(new Date().toLocaleString(), "DD/MM/YYYY, h:mm:s");
    const dateDiff = date2.diff(date1, "hours");
    if(dateDiff < 24){
      return moment(date, "YYYY-MM-DD h-mm").fromNow();
    } else if (dateDiff>=24){
     const dateSplit = date.split(" ");
     const day = dateSplit[0].replace(/-/g, "/").split("/").reverse().join("/");
     const hour = dateSplit[1].replace("-", "h")
      return day + " à " + hour
    }
    //console.log(new Date('2021-08-13 13:43').getHours())
  }

  path(post: Post): string {
    return `${environmentApi.apiUrlImage}/${post?.id}/${post?.image}`;
  }
}
