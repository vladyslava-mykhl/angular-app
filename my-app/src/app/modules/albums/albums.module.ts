import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsRoutingModule } from "./albums-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AlbumsService } from "./albums.service";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AlbumsService
  ]
})
export class AlbumsModule { }
