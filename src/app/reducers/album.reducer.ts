import * as AlbumActions from './../actions/album.actions';

export function AlbumReducer(state: [] = [], action: AlbumActions.Actions) {
    switch(action.type) {
        case AlbumActions.ADD_ALBUM:
            return [...state, action.payload];

        case AlbumActions.GET_ALBUM:
            return state;
            
        case AlbumActions.REMOVE_ALBUM:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}