import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AddAdminComponent } from './USER/add-admin/add-admin.component';
import { DashboardComponent } from './dashboard.component';
import { EditorArticleComponent } from './POST/editor-article/editor-article.component';
import { AdminListComponent } from './USER/admin-list/admin-list.component';
import { UserListComponent } from './USER/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HandleUserComponent } from './USER/handle-user/handle-user.component';
import { HandlePostComponent } from './POST/handle-post/handle-post.component';
import { MyArticlesComponent } from './POST/my-articles/my-articles.component';



@NgModule({
  declarations: [
    AddAdminComponent,
    DashboardComponent,
    EditorArticleComponent,
    AdminListComponent,
    UserListComponent,
    HandleUserComponent,
    HandlePostComponent,
    MyArticlesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    RouterModule
  ]
})

export class DashboardModule { }
