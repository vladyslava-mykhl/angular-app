import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {UsersService} from '../../../shared/services/users.service'
import {Post} from "../../../../interfaces/post.interface";
import {User} from "../../../../interfaces/user.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  postsList: Post [] = [];
  usersList: User [] = [];
  userId?: number;
  loading: boolean = true;

  constructor(private PostsService: PostsService, private UsersService: UsersService) {}

  openPost(id:number) {
    window.location.href = `http://localhost:4200/posts/${id}`;
  };

  onChange(event:any){
    this.userId = event.value;
    this.onGetPosts();
  };

  onGetPosts = () => {
    this.PostsService.getPosts(this.userId).subscribe((res) => {
      this.postsList = [...res];
      this.loading = false;
    });
  };

  ngOnInit(): void {
    this.onGetPosts();
    this.UsersService.getUsers().subscribe((res) => {
      this.usersList = [...res];
      this.loading = false;
    });
  };
};


