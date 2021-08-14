import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userSub : Subscription;
  users$: Observable<Array<User>>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.users$ = this.userService.findAllUsers().pipe(
      map(users=> users.filter(user => user.role == 'USER'))
    );
  }


// TRANSFORMATION DE L'OBSERVABLE POUR MANIPULER LE CONTENU DU TABLEAU
// this.posts$ = this.addPostService.findAll().pipe(
//   map((posts:Array<Post>) => {
//         posts.forEach((post:Post) => {
//           post.createdOn = 'toto'
//         })
//     return posts;
// }));

  deleteUser(id: number){
    this.userSub = this.userService.delete(id).subscribe(data =>{ 

      // fonction de filtre
      this.users$ = this.users$.pipe(
        map(users=> users.filter(user => user.id != id))
      )
      });
    //this.router.navigateByUrl('blog');
    //NOTE TROUVER UN MOYEN DE RAFRACHIR
  }

  setTimeToMoment(date: string){
    return date[2] + "/" + date[1] + "/" + date[0];
    }  
}
