import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/models/post-payload';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AddPostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.scss']
})
export class MyArticlesComponent implements OnInit {

  currentUserUsername: string;
  posts$: Observable<Array<Post>>;
  

  constructor(private postService: AddPostService, private authService: AuthService,  private localStorageService : LocalStorageService,) { }

  ngOnInit() {
    // this.currentUserUsername = this.localStorageService.retrieve("username");
    // this.posts$ = this.postService.findPostByUsername(this.currentUserUsername);
    // .pipe(
    //   map((posts:Array<Post>) => {
    //     posts.forEach((post:Post) => {
    //     })
    //     console.log(posts);
    //         return posts;
        
    //   }
    // ));
  }

  // setTimeToMoment(date: string){
  //   console.log(date[1]);
  //   return date[2] + "/" + date[1] + "/" + date[0];
  //   }  

    // TRANSFORMATION DE L'OBSERVABLE POUR MANIPULER LE CONTENU DU TABLEAU
// this.posts$ = this.addPostService.findAll().pipe(
//   map((posts:Array<Post>) => {
//         posts.forEach((post:Post) => {
//           post.createdOn = 'toto'
//         })
//     return posts;
// }));


}
