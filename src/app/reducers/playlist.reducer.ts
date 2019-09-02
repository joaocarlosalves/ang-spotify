import * as PlaylistActions from './../actions/playlist.actions';

export function PlaylistReducer(state: [] = [], action: PlaylistActions.Actions) {
    switch(action.type) {
        case PlaylistActions.ADD_PLAYLIST:
            return [...state, action.payload];

        case PlaylistActions.GET_PLAYLIST:
            return state;
            
        case PlaylistActions.REMOVE_PLAYLIST:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}