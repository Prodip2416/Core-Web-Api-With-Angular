import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Player } from './player';
import { environment } from 'src/environments/environment';
import { PlayerDetails } from './playersDetails';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(environment.apiURL + 'players')
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getPlayersDetail(name): Observable<PlayerDetails[]> {
    return this.httpClient.get<PlayerDetails[]>(environment.apiURL + 'players/playersDetail/' + name)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getPlayer(id): Observable<Player> {
    return this.httpClient.get<Player>(environment.apiURL + 'players/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createPlayer(player): Observable<Player> {
    return this.httpClient.post<Player>(environment.apiURL + 'players', JSON.stringify(player), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updatePlayer(id, player): Observable<Player> {
    return this.httpClient.put<Player>(environment.apiURL + 'players/' + id, JSON.stringify(player), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deletePlayer(id) {
    return this.httpClient.delete<Player>(environment.apiURL + 'players/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
