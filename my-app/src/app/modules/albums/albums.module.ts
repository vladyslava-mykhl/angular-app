import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumsRoutingModule } from "./albums-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AlbumsService } from "./components/albums/albums.service";
import { SharedModule } from "../../shared/shared.module";
import {PhotosComponent} from "./components/photos/photos.component";
import {PhotosService} from "./components/photos/photos.service";

@NgModule({
  declarations: [
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AlbumsService,
    PhotosService
  ]
})
export class AlbumsModule { }
