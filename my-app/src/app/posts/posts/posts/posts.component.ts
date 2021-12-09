import { Component, OnInit } from '@angular/core';
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private PostsService: PostsService) { }

  ngOnInit(): void {
    this.PostsService.getPosts().subscribe((data) => {
      console.log(data);
    });
  };
}
