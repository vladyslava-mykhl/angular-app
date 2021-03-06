import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumComponent} from "./components/album/album.component";


const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent
  },
  {
  path: `:id`,
  component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
