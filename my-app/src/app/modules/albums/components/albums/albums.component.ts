import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Album } from "../../../../interfaces/albums.interface";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
 albumList: Album[] = []

  constructor(private AlbumsService: AlbumsService) { }

  ngOnInit(): void {

    this.AlbumsService.getAlbums().subscribe((res) => {
      this.albumList = Object.values(res).map((item) => {
        return {
          id: item.id,
          title: item.title,
          userId: item.userId
        }
      })
    });
  };
}
