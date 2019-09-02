import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './../../services/album.service';
import { Store } from '@ngrx/store';
import { Token } from './../../models/token.model';
import { AppState } from './../../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id: any;
  token: any;
  getToken: Observable<Token[]>;
  resultAlbum: any;
  disco: any = {};
  artists: any;
  tracks: any;

  constructor(
    private album: AlbumService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.getToken = store.select('token');
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");

      this.getToken
      .subscribe(data => {
        this.token = data[0];    

        setTimeout(() => {
          this.album.getAlbum(this.id, this.token['access_token'])
          .subscribe((data: any) => {
            this.disco = data;
            this.artists = data['artists'];
            
            console.log(this.artists);
          });

          this.album.getAlbumTracks(this.id, this.token['access_token'])
          .subscribe((data: any) => {
            this.tracks = data['items'];
            
            console.log(this.tracks);
          });
        }, 1000);
      });
    });
  }
}
