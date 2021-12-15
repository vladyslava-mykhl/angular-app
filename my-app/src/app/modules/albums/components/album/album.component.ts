import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AlbumService} from "../../services/album.service";
import {Album} from "../../../../interfaces/album.interface";
import {PhotosService} from "../../services/photos.service";
import {Photo} from "../../../../interfaces/photo.interface";
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {UserService} from '../../../shared/services/user.service'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albumId?: number;
  album?: Album;
  photos: Photo[] = [];
  authorName?: string;
  galleryOptions: NgxGalleryOptions [] = [] ;
  galleryImages: NgxGalleryImage[] = [];
  loading: boolean = true;
  error: any = null;

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
        res.map((item) => {
          let obj = {
            big: item.url,
            medium: item.url,
            small: item.thumbnailUrl
          }
          this.galleryImages.push(obj);
        })
          this.galleryOptions = [
          {
            imageArrows : true,
            width: '500px',
            height: '600px',
            thumbnailsColumns: 8,
            imageAnimation: NgxGalleryAnimation.Slide
          },
          {
            breakpoint: 900,
            width: '400px',
            height: '400px',
            thumbnailsColumns: 6,
          },
          {
            breakpoint: 700,
            width: '300px',
            height: '300px',
            thumbnailsColumns: 5,
          },
          {
            breakpoint: 400,
            width: '250px',
            height: '200px',
            thumbnailsColumns: 3,
          },
          {
            breakpoint: 400,
            preview: false
          }
        ];
        this.loading = false;
      });
    }, err => this.error = err);
  };
};
