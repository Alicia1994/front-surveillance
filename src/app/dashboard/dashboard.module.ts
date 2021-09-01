import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './dashboard-routing.module';
import { AddAdminComponent } from './dashboard-user/add-admin/add-admin.component';
import { DashboardComponent } from './dashboard.component';
import { EditorArticleComponent } from './dashboard-post/editor-article/editor-article.component';
import { AdminListComponent } from './dashboard-user/admin-list/admin-list.component';
import { UserListComponent } from './dashboard-user/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HandleUserComponent } from './dashboard-user/handle-user/handle-user.component';
import { HandlePostComponent } from './dashboard-post/handle-post/handle-post.component';
import { UpdatePostComponent } from './dashboard-post/update-post/update-post.component';
import { AddPostComponent } from './dashboard-post/add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AddAdminComponent,
    DashboardComponent,
    EditorArticleComponent,
    AdminListComponent,
    UserListComponent,
    HandleUserComponent,
    HandlePostComponent,
    UpdatePostComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    RouterModule,
    EditorModule,
  ]
})

export class DashboardModule { }
