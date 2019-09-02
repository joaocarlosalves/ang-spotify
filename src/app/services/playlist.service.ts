import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PlaylistService {
    constructor(private http: HttpClient) { }

    getPlaylist(id, token) {
        let url = `https://api.spotify.com/v1/playlists/${id}`;

        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        
        return this.http.get(url, { headers: reqHeader });
    }

    getPlaylistTracks(id, token) {
        let url = `https://api.spotify.com/v1/playlists/${id}/tracks`;

        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        
        return this.http.get(url, { headers: reqHeader });
    }
}