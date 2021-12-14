import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AlbumService} from "./album.service";
import {Album} from "../../../../interfaces/album.interface";
import {PhotosService} from "../photos/photos.service";
import {Photo} from "../../../../interfaces/photo.interface";
import {UserService} from "../../../../shared/components/user/user.service";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


albumId?: number;
  album?: Album;
  photos: Photo[] = [];
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
        console.log(this.photos)
      });
    });
  };
};
