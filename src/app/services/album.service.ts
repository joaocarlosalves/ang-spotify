import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AlbumService {
    constructor(
      private http: HttpClient
      ) { }

    getAlbum(id, token) {
        let url = `https://api.spotify.com/v1/albums/${id}`;

        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        
        return this.http.get(url, { headers: reqHeader });
    }

    getAlbumTracks(id, token) {
        let url = `https://api.spotify.com/v1/albums/${id}/tracks`;

        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        
        return this.http.get(url, { headers: reqHeader });
    }
}