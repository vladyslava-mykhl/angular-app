import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http:HttpClient) { }

  getPostById(id:any) {
    console.log(id)
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
