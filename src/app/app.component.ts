import { Component } from '@angular/core';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xpotify';

  constructor(private tokenService: TokenService) {}
  
  ngOnInit() {    
    this.tokenService.storeToken();      
    setInterval(() => this.tokenService.storeToken(), 3300000);
  }
}
