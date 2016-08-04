import { Component } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: './app/sidebar.html',
    styleUrls: ['./app/sidebar.css']
})

export class SidebarComponent{

    isClickedOost: boolean = false;
    isClickedWinter: boolean = false;
    isClickedUsa: boolean = false;

    openSidebarOostenrijk(){
        this.isClickedOost = true;
    }

    openSidebarWintersport(){
        this.isClickedWinter = true;
    }

    openSidebarAmerika(){
        this.isClickedUsa = true;
    }

    sluitSidebarOostenrijk(){
        this.isClickedOost = false;
    }

    sluitSidebarWintersport(){
        this.isClickedWinter = false;
    }

    sluitSidebarAmerika(){
        this.isClickedUsa = false;
    }
}