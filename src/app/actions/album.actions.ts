import { Action, Store } from '@ngrx/store'
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

export const ADD_ALBUM       = '[ALBUM] Add'
export const GET_ALBUM       = '[ALBUM] Get'
export const REMOVE_ALBUM    = '[ALBUM] Remove'

export class AddAlbum implements Action {
    readonly type = ADD_ALBUM

    constructor(public payload: any[]) {}
}

export class GetAlbum implements Action {
    readonly type = GET_ALBUM
    album: Observable<any[]>;

    constructor(private store: Store<AppState>) { 
        this.album = this.store.select('album');
    }
}

export class RemoveAlbum implements Action {
    readonly type = REMOVE_ALBUM

    constructor(public payload: number) {}
}

export type Actions = AddAlbum | GetAlbum | RemoveAlbum