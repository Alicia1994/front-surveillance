import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  admins$: Observable<Array<User>>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
     this.admins$ = this.userService.findAllAdmin();
  }

  setTimeToMoment(date: string){
    return date[2] + "/" + date[1] + "/" + date[0];
    }  


}
