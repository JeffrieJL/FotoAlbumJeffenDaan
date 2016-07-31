import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';


@Component({
    selector: 'album',
    templateUrl: './app/album.html',
    styleUrls: ['./app/album.css'],
    providers: [AlbumService]
})

export class AlbumComponent implements OnInit{
    constructor(private albumService: AlbumService){}

    ngOnInit(){

    }

    oostenrijkAlbum(){
        this.albumService.oostenrijkAlbum();
    }

    wintersportAlbum(){
        this.albumService.wintersportAlbum();
    }

    amerikaAlbum(){
        this.albumService.amerikaAlbum();
    }
}

