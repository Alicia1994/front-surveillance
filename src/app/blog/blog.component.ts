import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { AddPostService } from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts$: Observable<Array<Post>>;
  posts;
  constructor(private postService: AddPostService) { }

  ngOnInit() {
    this.posts$ = this.postService.findAll();
  }

}
