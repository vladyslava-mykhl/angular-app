import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts(id: number | undefined) {
    console.log(id)
    return id ?
      this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      : this.http.get('https://jsonplaceholder.typicode.com/posts');
  };
};
