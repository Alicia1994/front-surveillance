import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './dashboard-user/add-admin/add-admin.component';
import { AdminListComponent } from './dashboard-user/admin-list/admin-list.component';
import { DashboardComponent } from './dashboard.component';
import { EditorArticleComponent } from './dashboard-post/editor-article/editor-article.component';
import { UserListComponent } from './dashboard-user/user-list/user-list.component';
import { HandleUserComponent } from './dashboard-user/handle-user/handle-user.component';
import { HandlePostComponent } from './dashboard-post/handle-post/handle-post.component';
import { AddPostComponent } from './dashboard-post/add-post/add-post.component';
import { UpdatePostComponent } from './dashboard-post/update-post/update-post.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent, 
    canActivate: ["onlyGuard"], 
    data: { roles: ['ADMIN'] }, 
    children: [
      { path: "handle-user/add-admin", component: AddAdminComponent },
      { path: "handle-user/user-list", component: UserListComponent },
      { path: "handle-user/admin-list", component: AdminListComponent },
      { path: "handle-post/editor-article", component: EditorArticleComponent },
      { path: "handle-user", component: HandleUserComponent },
      { path: "handle-post", component: HandlePostComponent },
      { path: "handle-post/add-post", component: AddPostComponent },
      { path: 'handle-post/update-post/:id', component: UpdatePostComponent },
      {path:'', redirectTo: "/admin", pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
