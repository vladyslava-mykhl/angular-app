import { Component, OnInit } from '@angular/core';
import  { PhotosService } from './photos.service';
import { Photo } from '../../../../interfaces/photos.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photoList: Photo[] = []

  constructor(private PhotosService: PhotosService) { }

  ngOnInit(): void {
    this.PhotosService.getPhotos().subscribe((res) => {
      this.photoList = Object.values(res).map((item) => {
        return {
          albumId: item.albumId,
          id: item.id,
          title: item.title,
          url: item.url,
          thumbnailUrl: item.thumbnailUrl
        }
      })
      console.log(this.photoList)
    })
  }
}
