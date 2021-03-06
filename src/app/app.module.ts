import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostsListComponent } from './component/posts-list/posts-list.component';
import { PostItemComponent } from './component/post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    PostsComponent,
    PostsListComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
