import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent} from "./components/post/post.component";
import { PostsRoutingModule } from "./posts-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { PostsService } from "./components/posts/posts.service";
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from "../../shared/shared.module";
import {  CommentsComponent } from "./components/comments/comments.component";
import {  CommentsService } from "./components/comments/comments.service";
import {  PostService } from "./components/post/post.service";
import {  UserService } from "../../shared/components/user/user.service";
import {  UsersService  } from "../../shared/components/users/users.service";

@NgModule({
  declarations: [
    PostsComponent,
    CommentsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    MatSelectModule,
    SharedModule
  ],
  providers: [
    PostsService,
    CommentsService,
    PostService,
    UserService,
    UsersService
  ]
})
export class PostsModule { }
