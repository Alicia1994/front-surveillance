import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/models/post-payload';
import { AddPostService } from 'src/app/services/post.service';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations:[]
})

export class LastArticlesComponent implements OnInit {



  posts$: Observable<Array<Post>>;
  postsArray = [];
 
  constructor(private addPostService: AddPostService, private router: Router) { }


  ngOnInit() {
    this.posts$ = this.addPostService.findAll().pipe(
      map(
        (posts:Array<Post>) => {
          posts.forEach((post:Post) => {
          })
          console.log(posts);
          return posts = this.postsArray;
        }
      )
    );
    
  
  }

}