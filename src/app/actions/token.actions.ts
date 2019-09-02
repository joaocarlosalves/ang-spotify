import { Action, Store } from '@ngrx/store'
import { Token } from './../models/token.model'
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

export const ADD_TOKEN       = '[TOKEN] Add'
export const GET_TOKEN       = '[TOKEN] Get'
export const REMOVE_TOKEN    = '[TOKEN] Remove'

export class AddToken implements Action {
    readonly type = ADD_TOKEN

    constructor(public payload: Token) {}
}

export class GetToken implements Action {
    readonly type = GET_TOKEN
    token: Observable<Token[]>;

    constructor(private store: Store<AppState>) { 
        this.token = this.store.select('token');
    }
}

export class RemoveToken implements Action {
    readonly type = REMOVE_TOKEN

    constructor(public payload: number) {}
}

export type Actions = AddToken | GetToken | RemoveToken