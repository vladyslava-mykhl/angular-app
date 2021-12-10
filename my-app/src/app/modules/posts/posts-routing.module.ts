import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "../posts/components/posts/posts.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {UsersComponent} from "../../shared/components/users/users.component";


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
