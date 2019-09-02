import { Action, Store } from '@ngrx/store'
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

export const ADD_SEARCH       = '[SEARCH] Add'
export const GET_SEARCH       = '[SEARCH] Get'
export const REMOVE_SEARCH    = '[SEARCH] Remove'

export class AddSearch implements Action {
    readonly type = ADD_SEARCH

    constructor(public payload: any[]) {}
}

export class GetSearch implements Action {
    readonly type = GET_SEARCH
    search: Observable<any[]>;

    constructor(private store: Store<AppState>) { 
        this.search = this.store.select('search');
    }
}

export class RemoveSearch implements Action {
    readonly type = REMOVE_SEARCH

    constructor(public payload: number) {}
}

export type Actions = AddSearch | GetSearch | RemoveSearch