import { Component, OnInit } from '@angular/core';
import {Comment} from "../../../../interfaces/comment.interface";
import {CommentsService} from "./comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentList: Comment[] = []

  constructor(private CommentsService: CommentsService) { }

  ngOnInit(): void {
    // this.CommentsService.getComments().subscribe((res) => {
      // this.commentList = Object.values(res).map((item) => {
      //   return {
      //     postId: item.postId,
      //     id: item.id,
      //     name: item.name,
      //     email: item.email,
      //     body: item.body
      //   }
      // })
      // console.log(this.commentList)
    // })
  }
}
