import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { EventEmitterService } from "./../../../services/eventEmitter.service";

@Component({
  selector: 'app-user-playlists',
  templateUrl: './user-playlists.component.html',
  styleUrls: ['./user-playlists.component.scss']
})
export class UserPlaylistsComponent implements OnInit, OnDestroy {
  userPlaylists: any = [
    {
      title: 'Playlist 1',
      id: '37i9dQZEVXcKbs0uwuE9rz'
    },
    {
      title: 'Playlist 2',
      id: '0QObIGI6C5lv4X2CBlXpwX'
    }
  ];

  constructor() {}

  modalNewPlaylist() {
    EventEmitterService.get('modalPlaylist').emit('modalPlaylist');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    EventEmitterService.get('modalPlaylist').unsubscribe();
  }

}
