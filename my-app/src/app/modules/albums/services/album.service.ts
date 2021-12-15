import { Injectable } from '@angular/core';
import {Album} from "../../../interfaces/album.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }

  getAlbumById(id: number | undefined) {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  };
};
