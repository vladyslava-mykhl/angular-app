import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from '../../../../interfaces/comment.interface'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  getCommentsById(id: number | undefined) {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
