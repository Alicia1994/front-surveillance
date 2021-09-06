import { Component, OnInit, TemplateRef } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUserUsername: string;
  userSub : Subscription;
  user$: Observable<Array<User>>;
  modalRef: BsModalRef;
  idToBeDeleted = '';
  message: string;

  constructor(
    private userService: UserService, 
    private authService: AuthService,  
    private localStorageService : LocalStorageService,
    private router: Router,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {
    this.currentUserUsername = this.localStorageService.retrieve("username");
    this.user$ = this.userService.findUserByUsername(this.currentUserUsername);
  }

  setTimeToMoment(date: string){
    console.log(date[1]);
    return date[2] + "/" + date[1] + "/" + date[0];
    }  

  deleteAccount(id: number){
    this.userSub = this.userService.deleteUser(id).subscribe(data =>{ 
      this.authService.logout();
      this.router.navigateByUrl("home");
    }, error => {
      console.log("delete failed")
    });
    this.message = 'Confirmed!';
    this.modalRef.hide();
    this.delete();
  }

// HANDLE MODAL

openModal(template: TemplateRef<any>, id: any) {
  this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  this.idToBeDeleted = id;
}

delete():void{
  console.log('deleted',this.idToBeDeleted,' record');
}

decline(): void {
  this.message = 'Declined!';
  this.modalRef.hide();
}

  

}
