import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventEmitterService } from 'src/app/services/eventEmitter.service';

@Component({
  selector: 'app-new-playlist',
  templateUrl: './new-playlist.component.html',
  styleUrls: ['./new-playlist.component.scss']
})
export class NewPlaylistComponent implements OnInit, OnDestroy {

  @Input() showModal;

  constructor() { 
    EventEmitterService.get('modalPlaylist').subscribe(() => this.showModal = true);
  }

  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    EventEmitterService.get('modalPlaylist').unsubscribe();
  }

}
