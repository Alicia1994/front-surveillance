import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription, pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/models/post-payload';
import { AddPostService } from 'src/app/services/post.service';
import { environmentApi } from 'src/environments/environment';
import { AdminService } from '../../service/admin.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-editor-article',
  templateUrl: './editor-article.component.html',
  styleUrls: ['./editor-article.component.scss']
})
export class EditorArticleComponent implements OnInit {

  postSub: Subscription;
  dataPosts: Post[];
  isDeleted: boolean = false;
  posts: Post[];
  posts$: Observable<Array<Post>>;
  data;
  searchText: string;
  modalRef: BsModalRef;
  idToBeDeleted = '';
  message: string;

  constructor(private addPostService: AddPostService,
    private router: Router,
    private adminService: AdminService,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    this.posts$ = this.addPostService.findAll().pipe(
      map((posts: Array<Post>) => {
        return posts;
      }));
  }

  clickAgir() {
    this.posts$ = this.addPostService.findAll().pipe(
      map(posts => posts.filter(post => post?.categorie?.name == "Agir")));
  }

  clickActualites() {
    this.posts$ = this.addPostService.findAll().pipe(
      map(posts => posts.filter(post => post?.categorie?.name == "Actualités")));
  }

  clickFocus() {
    this.posts$ = this.addPostService.findAll().pipe(
      map(posts => posts.filter(post => post?.categorie?.name == "Focus")));
  }

  clickAll() {
    this.posts$ = this.addPostService.findAll().pipe(
      map((posts: Array<Post>) => {
        return posts;
      }));
  }

  // ****** Handle the publication of the articles *********
  setTimeToMoment(date: string) {
    const date1 = moment(date, "YYYY-MM-DD h-mm");
    const date2 = moment(new Date().toLocaleString(), "DD/MM/YYYY, h:mm:s");
    const dateDiff = date2.diff(date1, "hours");
    if (dateDiff < 24) {
      return moment(date, "YYYY-MM-DD h-mm").fromNow();
    } else if (dateDiff >= 24) {
      const dateSplit = date.split(" ");
      const day = dateSplit[0].replace(/-/g, "/").split("/").reverse().join("/");
      const hour = dateSplit[1].replace("-", "h")
      return day + " à " + hour
    }
    //console.log(new Date('2021-08-13 13:43').getHours())
  }

  deletePost(id: number) {
    this.postSub = this.adminService.delete(id).subscribe(data => {

      console.log("ok")
    });
    this.posts$ = this.posts$.pipe(
      map(posts =>
        posts.filter(post => post.id != id))
    )
    this.message = 'Confirmed!';
    this.modalRef.hide();
    this.delete();
  }

  path(post: Post): string {
    return `${environmentApi.apiUrlImage}/${post.id}/${post.image}`;
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
