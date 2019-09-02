import { Action, Store } from '@ngrx/store'
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

export const ADD_PLAYLIST       = '[PLAYLIST] Add'
export const GET_PLAYLIST       = '[PLAYLIST] Get'
export const REMOVE_PLAYLIST    = '[PLAYLIST] Remove'

export class AddPlaylist implements Action {
    readonly type = ADD_PLAYLIST

    constructor(public payload: any[]) {}
}

export class GetPlaylist implements Action {
    readonly type = GET_PLAYLIST
    playlist: Observable<any[]>;

    constructor(private store: Store<AppState>) { 
        this.playlist = this.store.select('playlist');
    }
}

export class RemovePlaylist implements Action {
    readonly type = REMOVE_PLAYLIST

    constructor(public payload: number) {}
}

export type Actions = AddPlaylist | GetPlaylist | RemovePlaylist