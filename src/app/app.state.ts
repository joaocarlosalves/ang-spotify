import { Token } from './models/token.model';

export interface AppState {
  readonly token: Token[];
  readonly search: any[];
  readonly playlist: any[];
  readonly album: any[];
  readonly artist: any[];
  readonly track: any[];
}