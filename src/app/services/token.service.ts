import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Token } from './../models/token.model'
import * as TokenActions from './../actions/token.actions';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(
    private http: HttpClient,    
    private store: Store<AppState>
  ) { }

  storeToken() {
    this.http.get<Token[]>('https://clonefy.herokuapp.com/token')
    .subscribe(data => { 
      let token: any = {
        access_token: `${data['access_token']}`,
        token_type: "Bearer",
        expires_in: 3600,
        scope: ""
      }      
      
      this.store.dispatch(new TokenActions.AddToken(token));
    });
  }
}

