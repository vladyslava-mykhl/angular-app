import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import {PostsRoutingModule} from "./posts/posts-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./posts/posts.service";



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [
   PostsService
  ]
})
export class PostsModule { }
