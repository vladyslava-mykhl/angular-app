import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../../interfaces/post.interface";
import {ActivatedRoute, Params} from '@angular/router';
import {PostService} from './post.service';
import {UserService} from '../../../../shared/components/user/user.service';
import {CommentsService} from "../comments/comments.service";
import {Comment} from "../../../../interfaces/comment.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  post?: Post;
  commentList?: Comment[] = [];
  postId?: number;
  authorName ?: string;

  constructor(private activatedRoute: ActivatedRoute, private PostService: PostService, private UserService: UserService, private CommentsService: CommentsService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.postId = params['id'];
      this.PostService.getPostById(this.postId).subscribe((res) => {
        this.post = {...res};
        this.UserService.getUserById(this.post?.userId).subscribe((res) => {
          this.authorName = Object.assign(res).name;
        });
        this.CommentsService.getCommentsById(this?.postId).subscribe((res) => {
          this.commentList = [...res];
        });
     });
    });
  };
};
