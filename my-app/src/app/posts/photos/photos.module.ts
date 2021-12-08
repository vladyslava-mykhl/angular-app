import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import {PhotosRoutingModule} from "./photos/photos-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {PhotosService} from "./photos/photos.service";



@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    HttpClientModule
  ],
  providers: [
    PhotosService
  ]
})
export class PhotosModule { }
