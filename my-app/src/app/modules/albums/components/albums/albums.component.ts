import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Album } from "../../../../interfaces/album.interface";
import { Photo } from '../../../../interfaces/photo.interface';
import { PhotosService } from  '../photos/photos.service';
import {UsersService} from '../../../../shared/components/users/users.service';
import {User} from "../../../../interfaces/user.interface";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
 albumList?: Album[] = [];
 photoList?: Photo[] = [];
 usersList: User [] = [];
 userId?: number;

  constructor(private AlbumsService: AlbumsService, private PhotosService: PhotosService, private UsersService: UsersService) { }

  openAlbum(id:number) {
    window.location.href = `http://localhost:4200/albums/album/${id}`;
  };
  onChange(event:any){
    this.userId = event.value;
    this.onGetAlbums();
  };

  onGetAlbums = () => {
    this.AlbumsService.getAlbums(this.userId).subscribe((res) => {
      this.albumList = [...res];
    });
  };

  ngOnInit(): void {
    this.onGetAlbums();
    this.UsersService.getUsers().subscribe((res) => {
      this.usersList = [...res];
    });
  };
};
