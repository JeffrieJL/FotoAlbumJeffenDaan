import { Component } from '@angular/core';
import { AlbumComponent } from './album.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/startPage.html',
    styleUrls: ['./app/startPage.css'],
    directives: [AlbumComponent]
})

export class AppComponent{
    
}
