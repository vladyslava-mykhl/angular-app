import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsComponent} from "./components/albums/albums.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {UsersComponent} from "../../shared/components/users/users.component";


const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
