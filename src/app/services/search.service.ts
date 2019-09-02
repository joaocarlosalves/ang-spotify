import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SearchService {    
    token;

    constructor(private http: HttpClient) {}

    getSearch(search, token) {
        let url = `https://api.spotify.com/v1/search?q=${search}&type=artist%2Ctrack%2Calbum%2Cplaylist&limit=50`;

        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        
        return this.http.get(url, { headers: reqHeader });
    }

    getTopTracks(search, token) {
        let url = `https://api.spotify.com/v1/artists/${search}/top-tracks`;

        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        
        return this.http.get(url, { headers: reqHeader });
    }
}