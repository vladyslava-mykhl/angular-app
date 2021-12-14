import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumsRoutingModule } from "./albums-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AlbumsService } from "./components/albums/albums.service";
import { AlbumService } from './components/album/album.service';
import { SharedModule } from "../../shared/shared.module";
import {PhotosComponent} from "./components/photos/photos.component";
import {PhotosService} from "./components/photos/photos.service";
import {MatSelectModule} from "@angular/material/select";
import {UsersService} from "../../shared/components/users/users.service";
import { AlbumComponent } from './components/album/album.component';
import {UserService} from "../../shared/components/user/user.service";

@NgModule({
  declarations: [
    AlbumsComponent,
    PhotosComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule,
    SharedModule,
    MatSelectModule,
  ],
  providers: [
    AlbumsService,
    AlbumService,
    PhotosService,
    UsersService,
    UserService
  ]
})
export class AlbumsModule { }
