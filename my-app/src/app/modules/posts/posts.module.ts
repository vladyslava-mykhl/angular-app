import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostsRoutingModule } from "./posts-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { PostsService } from "./components/posts/posts.service";
import { SharedModule } from "../../shared/shared.module";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentsService} from "./components/comments/comments.service";
import {PostService} from "./components/post/post.service";

@NgModule({
  declarations: [
    PostsComponent,
    CommentsComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    PostsService,
    CommentsService,
    PostService
  ]
})
export class PostsModule { }
