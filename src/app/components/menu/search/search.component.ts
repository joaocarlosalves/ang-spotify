import { Component, OnInit, Input, NgZone } from '@angular/core';
import { SearchService } from './../../../services/search.service';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Token } from './../../../models/token.model';
import { AppState } from './../../../app.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  token: any;
  results: boolean = false;
  content: any;
  pageState: string = 'start';
  popularTracks: any;
  artists: any;
  artistID: any;
  tracks: any;
  playlists: any;
  albums: any;
  lastSearch: any;
  searchForm: FormGroup;
  timeout: any = null;
  getToken: Observable<Token[]>;
  getPrevSearches: Observable<any[]>;
  @Input() search: any;
  @Input() showSearch: any;
  
  constructor(
    private searchService: SearchService,
    private fb: FormBuilder,
    public lc: NgZone,
    private store: Store<AppState>
  ) { 
    this.getToken = store.select('token');
    this.getPrevSearches = store.select('search');
  }

  getTopTrack(artistID) {
    setTimeout(() => {
      this.searchService.getTopTracks(artistID, this.token['access_token'])
      .subscribe(data2 => {
          console.log('data');
          console.log(data2);
      });
    }, 1000);
  }

  getSearch(search) {
    this.searchService.getSearch(search, this.token['access_token'])
    .subscribe(data => {
      this.artists = data['artists']['items'];
      let albums = data['albums']['items'];
      this.playlists = data['playlists']['items'];
      this.tracks = data['tracks']['items'];

      this.artistID = this.artists[0].id;
      
      this.albums = albums.filter(album => {
        return album.album_type == 'album' || (album.album_type == 'single' && album.total_tracks >= 2);
      });      
    });

    setTimeout(() => {
      if(this.artists != '' || this.albums != '' || this.playlists != '') {
        this.content = 'all';
        this.results = true;
      } else if(this.artists != ''){
        this.content = 'artists';
        this.results = true;
      } else if(this.albums != '') { 
        this.content = 'albums';
        this.results = true;
      } else if(this.playlists != '') { 
        this.content = 'playlists';
        this.results = true;
      } else if(this.tracks != '') { 
        this.content = 'tracks';
        this.results = true;
      } else {
        this.results = false;
        this.content = 'none';
      }

      this.pageState = 'search';
    }, 1000);
  }

  getLastSearch() {
    return this.lastSearch;
  }

  showSearchContent(content) {
    this.content = content;
    console.log(this.content);
  }

  onChangeSearch(event) {
    let lastWord = event;

    this.timeout  = null;
    if(this.timeout){
      window.clearTimeout(this.timeout);
    }

    this.timeout = window.setTimeout(() => {
       this.timeout = null;
       this.lc.run(() => {     
         this.searchForm
         .get('searchInput')
         .valueChanges
         .pipe(debounceTime(1000))
         .subscribe(() => {
           if(lastWord != undefined || lastWord != null) {
             if(this.search == lastWord) {
               this.getSearch(this.search);
             } else {
               setTimeout(() => { 
                this.getSearch(this.search);                
              }, 1000);
             }
           }      
         }); 
       });
    },1000);
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchInput: null
    })

    this.getToken
    .subscribe(data => {
      this.token = data[0];
    });

    this.getPrevSearches
    .subscribe(data => {
      this.lastSearch = data;
    });
  }
}
