import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AlbumService} from "./album.service";
import {Album} from "../../../../interfaces/album.interface";
import {PhotosService} from "../photos/photos.service";
import {Photo} from "../../../../interfaces/photo.interface";
import {UserService} from "../../../../shared/components/user/user.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albumId?: number;
  album?: Album;
  photos?: Photo[];
  authorName?: string;

  constructor(private activatedRoute: ActivatedRoute, private AlbumService: AlbumService, private PhotosService: PhotosService, private UserService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.albumId = params['id'];
      this.AlbumService.getAlbumById(this.albumId).subscribe((res) => {
        this.album = {...res}
        this.UserService.getUserById(this.album?.userId).subscribe((res) => {
          this.authorName = res.name;
        });
      });
      this.PhotosService.getPhotos(this.albumId).subscribe((res) => {
        this.photos = [...res]
      });
    });
  };
};
