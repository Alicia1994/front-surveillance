import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { Observable, Subscription } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUserUsername: string;
  userSub : Subscription;
  user$: Observable<Array<User>>;
  

  constructor(private userService: UserService, private authService: AuthService,  private localStorageService : LocalStorageService,) { }

  ngOnInit(): void {
    console.log();
    this.currentUserUsername = this.localStorageService.retrieve("username");
    this.user$ = this.userService.findUserByUsername(this.currentUserUsername);
  }

  setTimeToMoment(date: string){
    console.log(date[1]);
    return date[2] + "/" + date[1] + "/" + date[0];
    }  

}
