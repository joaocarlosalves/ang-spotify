import { Token } from './../models/token.model';
import * as TokenActions from './../actions/token.actions';

export function TokenReducer(state: Token[] = [], action: TokenActions.Actions) {
    switch(action.type) {
        case TokenActions.ADD_TOKEN:
            return [...state, action.payload];

        case TokenActions.GET_TOKEN:
            return state;
            
        case TokenActions.REMOVE_TOKEN:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}