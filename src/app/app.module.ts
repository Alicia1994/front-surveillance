  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AddPostComponent } from './dashboard/POST/add-post/add-post.component';
//import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientInterceptor } from './interceptors/http-client-interceptor';
import { ProfilComponent } from './profil/profil.component';
import { CommonModule } from '@angular/common';
import { ContactSuccessComponent } from './contact-form/contact-success/contact-success.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from './alerts/alerts.component';
import { CalendarComponent } from './calendar/calendar.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { onlyGuard } from './guards/only-guard.guard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { AboutComponent } from './about/about.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
  listPlugin,
  timeGridPlugin,
  googleCalendarPlugin
]);

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
    ProfilComponent,
    ContactSuccessComponent,
    AlertsComponent,
    CalendarComponent,
    UpdateProfilComponent,
    AboutComponent
    
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
    DashboardModule,
    NgbModule,
    FullCalendarModule,
    Ng2SearchPipeModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},
  onlyGuard],
  bootstrap: [AppComponent]
})


export class AppModule { }
