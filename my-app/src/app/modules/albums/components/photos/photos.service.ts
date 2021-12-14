import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Photo} from "../../../../interfaces/photo.interface";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

  getPhotos(id: number | undefined) {
    console.log(id)
    return id ?
      this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      : this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  };
};
