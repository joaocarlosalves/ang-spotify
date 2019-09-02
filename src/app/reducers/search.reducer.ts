import * as SearchActions from './../actions/search.actions';

export function SearchReducer(state: [] = [], action: SearchActions.Actions) {
    switch(action.type) {
        case SearchActions.ADD_SEARCH:
            return [...state, action.payload];

        case SearchActions.GET_SEARCH:
            return state;
            
        case SearchActions.REMOVE_SEARCH:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}