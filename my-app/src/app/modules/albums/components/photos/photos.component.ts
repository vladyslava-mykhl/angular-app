import { Component, OnInit } from '@angular/core';
import  { PhotosService } from '../../services/photos.service';
import { Photo } from '../../../../interfaces/photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photoList: Photo[] = []

  constructor(private PhotosService: PhotosService) { }

  ngOnInit(): void {
    // this.PhotosService.getPhotos().subscribe((res) => {
    //   this.photoList = Object.values(res).map((item) => {
    //     return {
    //       albumId: item.albumId,
    //       id: item.id,
    //       title: item.title,
    //       url: item.url,
    //       thumbnailUrl: item.thumbnailUrl
    //     }
    //   })
    // })
  }
}
