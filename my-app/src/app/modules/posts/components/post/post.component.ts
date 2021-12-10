import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../interfaces/post.interface';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PostService} from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post[] = []
  postId: any;

  constructor(private activatedRoute: ActivatedRoute, private PostService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.postId = params['id'];
    })
    this.PostService.getPostById(this.postId).subscribe((res) => {
     let item = Object.assign(res)
      // this.post = {
      //   id: item.id,
      //   title: item.title,
      //   body: Object.values(res).body,
      //   userId: Object.values(res).userId
      // }
    })
  }
}

