import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";
import {Post} from "../../../interfaces/post.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  postsList: Post[] = []

  constructor(private PostsService: PostsService) { }

  ngOnInit(): void {

    this.PostsService.getPosts().subscribe((res) => {
     this.postsList = Object.values(res).map((item) => {
        return {
          id: item.id,
          title: item.title,
          body: item.body,
          userId: item.userId
        }
      })
    });
  };
}
