import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main/main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule)
  },
  // {
  //   path: 'post/:id',
  //   loadChildren: () => import('../app/shared/shared.module').then(m => m.SharedModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
