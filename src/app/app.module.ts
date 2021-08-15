  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import Swiper from 'swiper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ArticleListComponent } from './blog/article-list/article-list.component';
import { ArticleComponent } from './blog/article/article.component';
import { LastArticlesComponent } from './home/last-articles/last-articles.component';
import { LegalMentionsComponent } from './legal-mentions/legal-mentions.component';
import { RouterModule } from '@angular/router';
import { SignupSuccessComponent } from './auth/signup-success/signup-success.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AddPostComponent } from './add-post/add-post.component';
//import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientInterceptor } from './http-client-interceptor';
import { EditorModule } from '@tinymce/tinymce-angular';
import { UpdatePostComponent } from './update-post/update-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { EditorArticleComponent } from './dashboard/editor-article/editor-article.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { AdminListComponent } from './dashboard/admin-list/admin-list.component';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './dashboard/add-admin/add-admin.component';
import { OwlModule } from 'ngx-owl-carousel';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from "swiper/angular";


@NgModule({
  declarations: [
    
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OhFourComponent,
    LoginComponent,
    BlogComponent,
    SignupComponent,
    ContactFormComponent,
    ArticleListComponent,
    ArticleComponent,
    LastArticlesComponent,
    LegalMentionsComponent,
    SignupSuccessComponent,
    AddPostComponent,
    UpdatePostComponent,
    DashboardComponent,
    ProfilComponent,
    EditorArticleComponent,
    UserListComponent,
    AdminListComponent,
    AddAdminComponent,
    SwiperComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    EditorModule,
    IvyCarouselModule,
    OwlModule,
    BrowserAnimationsModule, 
    NgbModule,
    SwiperModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
