import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostsRoutingModule } from "./posts-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { PostsService } from "./posts.service";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
   PostsService
  ]
})
export class PostsModule { }
