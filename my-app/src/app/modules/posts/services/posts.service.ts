import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts(id: number | undefined) {
    return id ?
      this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      : this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  };
};
