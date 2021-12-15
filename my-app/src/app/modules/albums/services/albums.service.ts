import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "../../../interfaces/album.interface";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {}

  getAlbums(id: number | undefined) {
    return id ?
      this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      : this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  };
};
