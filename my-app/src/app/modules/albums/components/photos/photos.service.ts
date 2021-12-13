import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

  getPhotos(id: number | undefined) {
    console.log(id)
    return id ?
      this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      : this.http.get('https://jsonplaceholder.typicode.com/photos');
  };
};
