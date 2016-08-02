import { Component } from '@angular/core';
import { AlbumService } from './album.service';
import { SidebarComponent } from './sidebar.component';


@Component({
    selector: 'album',
    templateUrl: './app/album.html',
    styleUrls: ['./app/album.css'],
    providers: [AlbumService],
    directives: [SidebarComponent]
})

export class AlbumComponent {
    constructor(private albumService: AlbumService){}

    isClickedOost: boolean = false;
    isClickedWinter: boolean = false;
    isClickedUsa: boolean = false;
    disableIsHiddenOost: boolean = false;
    disableIsHiddenWinter: boolean = false;
    disableIsHiddenUsa: boolean = false;
    sluitIsHiddenOost: boolean = false;
    sluitIsHiddenWinter: boolean = false;
    sluitIsHiddenUsa: boolean = false;
    removePicsOost: boolean = false;
    removePicsWinter: boolean = false;
    removePicsUsa: boolean = false;

    oostenrijkAlbum(){
        this.albumService.oostenrijkAlbum();
        this.isClickedOost = true; //true wordt false in html
        this.isClickedWinter = true; //true wordt false in html
        this.isClickedUsa = true; //true wordt false in html
        this.sluitIsHiddenOost = true;
        this.disableIsHiddenWinter = true;
        this.disableIsHiddenUsa = true;
        this.removePicsOost = false; //false wordt true in html
    }

    wintersportAlbum(){
        this.albumService.wintersportAlbum();
        this.isClickedWinter = true; //true wordt false in html
        this.isClickedOost = true; //true wordt false in html
        this.isClickedUsa = true; //true wordt false in html
        this.sluitIsHiddenWinter = true;
        this.disableIsHiddenOost = true;
        this.disableIsHiddenUsa = true;
        this.removePicsWinter = false; //false wordt true in html
    }

    amerikaAlbum(){
        this.albumService.amerikaAlbum();
        this.isClickedUsa = true; //true wordt false in html
        this.isClickedOost = true; //true wordt false in html
        this.isClickedWinter = true; //true wordt false in html
        this.sluitIsHiddenUsa = true;
        this.disableIsHiddenOost = true;
        this.disableIsHiddenWinter = true;
        this.removePicsUsa = false; //false wordt true in html
    }

     sluitOostenrijkAlbum(){
        this.isClickedOost = false; //false wordt true in html
        this.removePicsOost = true; //true wordt false in html
        this.sluitIsHiddenOost = false;
        this.disableIsHiddenWinter = false;
        this.disableIsHiddenUsa = false;
        this.isClickedWinter = false; //false wordt true in html
        this.isClickedUsa = false; //false wordt true in html
    }

    sluitWinterAlbum(){
        this.isClickedWinter = false; //false wordt true in html
        this.removePicsWinter = true; //true wordt false in html
        this.sluitIsHiddenWinter = false;
        this.disableIsHiddenOost = false;
        this.disableIsHiddenUsa = false;
        this.isClickedOost = false; //false wordt true in html
        this.isClickedUsa = false; //false wordt true in html
    }
    
    sluitAmerikaAlbum(){
        this.isClickedUsa = false; //false wordt true in html
        this.removePicsUsa = true; //true wordt false in html
        this.sluitIsHiddenUsa = false;
        this.disableIsHiddenOost = false;
        this.disableIsHiddenWinter = false;
        this.isClickedOost = false; //false wordt true in html
        this.isClickedWinter = false; //false wordt true in html
    }
}

