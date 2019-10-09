import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { VotesComponent } from './votes/votes.component';
import { GithubComponent } from './github/github.component';
import { PostsComponent } from './posts/posts.component';

const routes: Route[] = [
  { path: "", redirectTo: '/posts', pathMatch: 'full' },
  { path: "posts", component: PostsComponent },
  { path: "users", component: GithubComponent },
  { path: "courses", component: CoursesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LayoutComponent,
    NavbarComponent,
    IntroComponent,
    ContentComponent,
    SidebarComponent,
    VotesComponent,
    GithubComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
