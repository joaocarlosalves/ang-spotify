import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from './../../services/playlist.service';
import { Store } from '@ngrx/store';
import { Token } from './../../models/token.model';
import { AppState } from './../../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  id: any;
  token: any;
  getToken: Observable<Token[]>;
  resultPlaylist: any;
  playlists: any = {};
  tracks: any;
  images: any;
  owner: any;
  artists: any;
  artistName: Array<string> = [];
  total;

  constructor(
    private playlist: PlaylistService,
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
          this.playlist.getPlaylist(this.id, this.token['access_token'])
          .subscribe((data: any) => {
            this.playlists = data;

            this.owner = data['owner'].display_name;
            this.images = data['images'][0]['url'];
            this.total = data['tracks']['total'];          
            this.tracks = data['tracks']['items'];
            
            let artists = data['tracks']['items'];
            let artName = [];
            let pass = [];

            for(let artist of artists) {
              artName.push(artist.track.artists[0]);              
            }

            for(let artistName of artName) {
              pass.push({name: artistName.name});  
              this.artistName = pass;            
            }
          });
        }, 1000);
      });
    });
  }
}
