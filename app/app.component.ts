import { Component, OnInit } from '@angular/core';
import { AlbumComponent } from './album.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/startPage.html',
    styleUrls: ['./app/startPage.css'],
    directives: [AlbumComponent]
})

export class AppComponent implements OnInit{
    ngOnInit(){
        //mischien oninit gebruiken voor de authenticatie, maar dan in een andere component.
    }
    
}
