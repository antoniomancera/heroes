import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Hero } from '../hero';
import { MessageService } from '../message-service/message-service.service';

@Injectable({
  providedIn: 'root',
})
export class NestService {
  readonly url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.url}/heroes`).pipe(
      tap(() => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHeroById(heroId: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.url}/heroes/${heroId}`).pipe(
      tap(() => this.log(`fetched hero id=${heroId}`)),
      catchError(this.handleError<Hero>(`getHero id=${heroId}`))
    );
  }

  addHero(heroName: string): Observable<Hero> {
    const newHero = { name: heroName };
    return this.http.post<Hero>(`${this.url}/heroes/`, newHero).pipe(
      tap(() => this.log(`added hero =${heroName}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero): Observable<Hero> {
    return this.http.delete<Hero>(`${this.url}/heroes/${hero.id}`).pipe(
      tap(() => this.log(`deleted hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.url}/heroes`, hero).pipe(
      tap(() => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('updateHero'))
    );
  }

  searchHeroes(heroName: string): Observable<Hero[]> {
    if (!heroName.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.url}/heroes?name=${heroName}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found heroes matching "${heroName}"`)
          : this.log(`no heroes matching "${heroName}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
