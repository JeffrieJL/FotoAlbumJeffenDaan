import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService{
    public oostenrijkAlbum(){
        let i: number = 1;
         for (i; i <= 4; i++) {
            window.URL = window.URL;
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jeffjlstorage.blob.core.windows.net/oostenrijk2012/oost'+i+'.JPG', true);
            xhr.responseType = 'blob';
            xhr.onload = function(e){
                if(this.status == 200){
                    let blob = this.response;
                    let img = document.createElement('img');
                    img.className = "picClass";
                    img.onload = function(e){
                        window.URL.revokeObjectURL(img.src);
                    };
                    img.src = window.URL.createObjectURL(blob);
                    let div = document.createElement('div');
                    div.className = "col-xs-4 col-lg-2";
                    div.appendChild(img);
                    document.getElementById('picaOost').appendChild(div);              
                }
            }
            xhr.send();
        }
    }

    public wintersportAlbum(){
        let i: number = 1;
         for (i; i <= 4; i++) {
            window.URL = window.URL;
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jeffjlstorage.blob.core.windows.net/wintersport2015/winter'+i+'.jpg', true);//deze album moet 'jpg' hebben ipv 'JPG', dus geen hoofdletters
            xhr.responseType = 'blob';
            xhr.onload = function(e){
                if(this.status == 200){
                    let blob = this.response;
                    let img = document.createElement('img');
                    img.className = "picClass";
                    img.onload = function(e){
                        window.URL.revokeObjectURL(img.src);
                    };
                    img.src = window.URL.createObjectURL(blob);
                    let div = document.createElement('div');
                    div.className = "col-xs-4 col-lg-2";
                    div.appendChild(img);
                    document.getElementById('picaWinter').appendChild(div);              
                }
            }
            xhr.send();
        }
    }

    public amerikaAlbum(){   
   
        let i: number = 1;
        for (i; i <= 4; i++) {
            window.URL = window.URL;
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jeffjlstorage.blob.core.windows.net/amerika2016/usa'+i+'.JPG', true);
            xhr.responseType = 'blob';
            xhr.onload = function(e){
                if(this.status == 200){
                    let blob = this.response;
                    let img = document.createElement('img');
                    img.className = "picClass";
                    img.onload = function(e){
                        window.URL.revokeObjectURL(img.src);
                    };
                    img.src = window.URL.createObjectURL(blob);
                    let div = document.createElement('div');
                    div.className = "col-xs-4 col-lg-2";
                    div.appendChild(img);
                    document.getElementById('picaUsa').appendChild(div);              
                }
            }
            xhr.send();
        }
    }
}


    //      Onderstaande code is de oude manier, bewaard ter referentie

    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'https://jeffjlstorage.blob.core.windows.net/oostenrijk2012/oost1.JPG', true);
    //     xhr.responseType = 'blob';
    //     xhr.onload = response;
    //     xhr.send();

    //     function response(e){
    //        let urlCreator = window.URL;
    //        let imgURL  = urlCreator.createObjectURL(this.response);
    //        let img: any = document.querySelector('#albumPicOostenrijk');
    //        img.src = imgURL;
    //    }


    //      Zelfde als bovenstaande maar resultaten worden gepushed in een array

    //     let i: number = 1;
    //     for (i; i <= 4; i++) {
    //         let xhr = new XMLHttpRequest();
    //         xhr.open('GET', 'https://jeffjlstorage.blob.core.windows.net/amerika2016/usa'+i+'.JPG', true);
    //         xhr.responseType = 'blob';
    //         xhr.onload = response;
    //         xhr.send();
            
            
    //         //let blobs;

    //         function response(e){
    //             if(xhr.status == 200){
    //                 let urlCreator = window.URL;
    //                 let imgURL  = urlCreator.createObjectURL(this.response);
    //                 let img: any = document.querySelector('#albumPicAmerika');
    //                 img.src = imgURL;
    //                 //blobs = new Array<blob>();
    //                 //blobs.push(imgURL);
    //             }
    //             else{
    //                 console.log(e);
    //             }
    //             i++;
    //         }
    //    }