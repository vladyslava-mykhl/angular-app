import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AlbumService} from "./album.service";
import {Album} from "../../../../interfaces/album.interface";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albumId?: number;
  album?: Album;

  constructor(private activatedRoute: ActivatedRoute, private AlbumService: AlbumService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.albumId = params['id'];
      this.AlbumService.getAlbumById(this.albumId).subscribe((res) => {
        console
        this.album = {...res}
      });
    });
  };
};
