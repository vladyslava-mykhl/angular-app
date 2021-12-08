import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotosComponent} from "./posts/photos/photos/photos.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./posts/photos/photos.module').then(m => m.PhotosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
