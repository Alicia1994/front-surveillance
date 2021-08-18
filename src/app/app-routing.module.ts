import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './blog/article/article.component';
import { BlogComponent } from './blog/blog.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LegalMentionsComponent } from './legal-mentions/legal-mentions.component';
import { LoginComponent } from './auth/login/login.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignupSuccessComponent } from './auth/signup-success/signup-success.component';
import { AuthGuard } from './auth.guard';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactSuccessComponent } from './contact-form/contact-success/contact-success.component';

const routes: Routes = [

  {path: '', component: LayoutComponent, children : [ 
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    {path:'connexion', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path:'signup-success', component: SignupSuccessComponent},
    {path: 'legal-mentions', component: LegalMentionsComponent},
    {path: 'contact', component: ContactFormComponent},
    {path: 'contact-success', component: ContactSuccessComponent},
    {path:'article', component: ArticleComponent},
    {path: 'post/:id', component: ArticleComponent},
    {path: 'blog', component: BlogComponent}
  ]},

    {path: '', canActivate: [AuthGuard], component: LayoutComponent, children : [ 
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'update-post/:id', component: UpdatePostComponent},
    {path: 'profil', component: ProfilComponent},
    { path: 'admin',
    loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

    // { path : 'not-found', component: OhFourComponent},
    // { path: '**', redirectTo: '/not-found'}



  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
