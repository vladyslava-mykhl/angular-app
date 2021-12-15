import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http:HttpClient) { }

  getPostById(id: number | undefined) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  };
};
