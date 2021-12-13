import { Component, OnInit } from '@angular/core';
import {PostsService} from "./posts.service";
import {UsersService} from '../../../../shared/components/users/users.service';
import {Post} from "../../../../interfaces/post.interface";
import {User} from "../../../../interfaces/users.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  postsList: Post[] = [];
  usersList: User [] = [];
  userId?: number;

  constructor(private PostsService: PostsService, private UsersService: UsersService) {}

  openPost(id:number) {
    window.location.href = `http://localhost:4200/posts/post/${id}`;
  };
  onChange(event:any){
    this.userId = event.value;
    this.onGetPosts();
  };
  onGetPosts = () => {
    this.PostsService.getPosts(this.userId).subscribe((res) => {
      this.postsList = Object.values(res).map((item) => {
        return {
          id: item.id,
          title: item.title,
          body: item.body,
          userId: item.userId
        };
      });
    });
  };
  ngOnInit(): void {
    this.onGetPosts();
    this.UsersService.getUsers().subscribe((res) => {
      this.usersList = Object.values(res).map((item) => {
        return {
          id: item.id,
          name: item.name,
          username: item.username,
          email: item.email,
          address: item.address,
          website: item.website,
          phone: item.phone,
          company: item.company
        };
      });
    });
  };
};


