import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumsRoutingModule } from "./albums-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AlbumsService } from "./services/albums.service";
import { AlbumService } from './services/album.service';
import { SharedModule } from '../shared/shared.module';
import {PhotosComponent} from "./components/photos/photos.component";
import {PhotosService} from "./services/photos.service";
import {MatSelectModule} from "@angular/material/select";
import {UsersService} from '../shared/services/users.service';
import { AlbumComponent } from './components/album/album.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {UserService} from '../shared/services/user.service';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

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
    CarouselModule,
    NgImageSliderModule,
    NgxGalleryModule,
    MatCardModule,
    MatProgressSpinnerModule
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
