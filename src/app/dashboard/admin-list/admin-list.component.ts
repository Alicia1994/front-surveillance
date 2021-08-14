import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  userSub : Subscription;
  admins$: Observable<Array<User>>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
     this.admins$ = this.userService.findAllAdmin();
  }

  deleteAdmin(id: number){
    this.userSub = this.userService.deleteAdmin(id).subscribe(data =>{ 
      // fonction de filtre
      this.admins$ = this.admins$.pipe(
        map(admins=> admins.filter(admin => admin.id != id))
      )
      });
  }

  setTimeToMoment(date: string){
    return date[2] + "/" + date[1] + "/" + date[0];
    }  


}
