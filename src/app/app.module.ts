import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    SinglePostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent },
    //   { path: 'posts', component: PostListComponent },
    //   { path: 'post/:id/:title', component: SinglePostComponent }
    // ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
