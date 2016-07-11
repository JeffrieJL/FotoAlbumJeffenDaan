import { Component } from '@angular/core';
import { album } from './albums';

@Component({
    selector: 'album',
    templateUrl: './app/album.html',
    styleUrls: ['./app/album.css']
})

export class AlbumComponent{
    albums = [
        new album(1, "OOSTENRIJK 2012"),
        new album(2, "WINTERSPORT 2015"),
        new album(3, "AMERIKA 2016")
    ];
    
    myAlbums = this.albums[0];
}