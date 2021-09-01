import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from '../../service/admin.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userSub : Subscription;
  users$: Observable<Array<User>>;
  modalRef: BsModalRef;
  idToBeDeleted = '';
  message: string;

  constructor(
    private userService: UserService, 
    private adminService: AdminService,
    private router: Router,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    this.users$ = this.adminService.findAllUsers().pipe(
      map(users=> users.filter(user => user.role == 'USER'))
    );
  }

  deleteUser(id: number){
    this.userSub = this.adminService.deleteUser(id).subscribe(data =>{ 
      // fonction de filtre
      this.users$ = this.users$.pipe(
        map(users=> users.filter(user => user.id != id))
      )
      });
    this.message = 'Confirmed!';
    this.modalRef.hide();
    this.delete();
  }

  setTimeToMoment(date: string){
    return date[2] + "/" + date[1] + "/" + date[0];
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
