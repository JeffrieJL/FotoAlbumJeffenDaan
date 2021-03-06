import { Component, ViewChild } from '@angular/core';
import { AlbumService } from './album.service';
import { SidebarComponent } from './sidebar.component';
import { ModalComponent } from './modal.component';


@Component({
    selector: 'album',
    templateUrl: './app/album.html',
    styleUrls: ['./app/album.css'],
    providers: [AlbumService],
    directives: [SidebarComponent, ModalComponent]
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

    @ViewChild('oost')
    oostChild: SidebarComponent;

    @ViewChild('winter')
    winterChild: SidebarComponent;

    @ViewChild('amerika')
    amerikaChild: SidebarComponent;

    oostenrijkAlbum(){
        this.albumService.oostenrijkAlbum();
        this.isClickedOost = true; //true wordt false in html
        this.isClickedWinter = true; //true wordt false in html
        this.isClickedUsa = true; //true wordt false in html
        this.sluitIsHiddenOost = true;
        this.disableIsHiddenWinter = true;
        this.disableIsHiddenUsa = true;
        this.removePicsOost = false; //false wordt true in html

        this.oostChild.openSidebarOostenrijk();
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

        this.winterChild.openSidebarWintersport();
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

        this.amerikaChild.openSidebarAmerika();
    }

     sluitOostenrijkAlbum(){
        this.isClickedOost = false; //false wordt true in html
        this.removePicsOost = true; //true wordt false in html
        this.sluitIsHiddenOost = false;
        this.disableIsHiddenWinter = false;
        this.disableIsHiddenUsa = false;
        this.isClickedWinter = false; //false wordt true in html
        this.isClickedUsa = false; //false wordt true in html

        this.oostChild.sluitSidebarOostenrijk();
    }

    sluitWinterAlbum(){
        this.isClickedWinter = false; //false wordt true in html
        this.removePicsWinter = true; //true wordt false in html
        this.sluitIsHiddenWinter = false;
        this.disableIsHiddenOost = false;
        this.disableIsHiddenUsa = false;
        this.isClickedOost = false; //false wordt true in html
        this.isClickedUsa = false; //false wordt true in html

        this.winterChild.sluitSidebarWintersport();
    }
    
    sluitAmerikaAlbum(){
        this.isClickedUsa = false; //false wordt true in html
        this.removePicsUsa = true; //true wordt false in html
        this.sluitIsHiddenUsa = false;
        this.disableIsHiddenOost = false;
        this.disableIsHiddenWinter = false;
        this.isClickedOost = false; //false wordt true in html
        this.isClickedWinter = false; //false wordt true in html

        this.amerikaChild.sluitSidebarAmerika();
    }
}

