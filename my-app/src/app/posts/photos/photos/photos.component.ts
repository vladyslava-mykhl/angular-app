import { Component, OnInit } from '@angular/core';
import {PhotosService} from "./photos.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe((data) => {
      console.log(data);
    });
  };
}
