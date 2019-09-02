import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { MainComponent } from './components/main/main.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AlbumComponent } from './components/album/album.component';
import { TrackComponent } from './components/track/track.component';
import { SearchComponent } from './components/menu/search/search.component';
import { CollectionComponent } from './components/collection/collection.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'track/:id', component: TrackComponent },
  { path: 'playlist/:id', component: PlaylistComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
