import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { UserPlaylistsComponent } from './components/menu/user-playlists/user-playlists.component';
import { UserInfoComponent } from './components/menu/user-info/user-info.component';
import { PlayerTrackDataComponent } from './components/player/player-track-data/player-track-data.component';
import { MainPlayerComponent } from './components/player/main-player/main-player.component';
import { PlayerConfigComponent } from './components/player/player-config/player-config.component';
import { MainComponent } from './components/main/main.component';
import { ArtistComponent } from './components/artist/artist.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AlbumComponent } from './components/album/album.component';
import { RelatedComponent } from './components/artist/related/related.component';
import { AboutComponent } from './components/artist/about/about.component';
import { OverviewComponent } from './components/artist/overview/overview.component';
import { TrackComponent } from './components/track/track.component';
import { NewPlaylistComponent } from './components/menu/new-playlist/new-playlist.component';
import { SearchComponent } from './components/menu/search/search.component';
import { CollectionComponent } from './components/collection/collection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { TokenReducer } from './reducers/token.reducer';
import { SearchReducer } from './reducers/search.reducer';
import { AlbumReducer } from './reducers/album.reducer';
import { PlaylistReducer } from './reducers/playlist.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    BannerComponent,
    MenuComponent,
    TabsComponent,
    UserPlaylistsComponent,
    UserInfoComponent,
    PlayerTrackDataComponent,
    MainPlayerComponent,
    PlayerConfigComponent,
    MainComponent,
    ArtistComponent,
    PlaylistComponent,
    AlbumComponent,
    RelatedComponent,
    AboutComponent,
    OverviewComponent,
    TrackComponent,
    NewPlaylistComponent,
    SearchComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule,
    StoreModule.forRoot({
      token: TokenReducer,
      search: SearchReducer,
      album: AlbumReducer,
      playlist: PlaylistReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
