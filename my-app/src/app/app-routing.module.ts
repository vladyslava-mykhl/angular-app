import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('../app/shared/shared.module').then(m => m.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
