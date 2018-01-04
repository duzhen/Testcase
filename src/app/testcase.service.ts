import { Injectable } from '@angular/core';
import { Testcase } from './testcase/testcase';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Partner} from './tc-partner/partner';
import { Client } from './tc-client/client';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TestcaseService {

  constructor(private httpc: HttpClient, private http: Http) { }

  private testcaseUrl = 'api/testcase';  // URL to web api
  private partnerUrl = 'api/partner';
  private clientUrl = 'api/client';
  private uploadUrl = 'api/file';
  /** GET heroes from the server */
  getTestcases (): Observable<Testcase[]> {
    return this.httpc.get<Testcase[]>(this.testcaseUrl)
      .pipe(
        tap(testcases => this.log(`fetched testcase`)),
        catchError(this.handleError('getTestcase', []))
      );
  }

  getPartner(): Observable<Partner[]> {
    const url = `${this.partnerUrl}`;
    return this.httpc.get<Partner[]>(url).pipe(
      tap(_ => this.log(`fetched Partner`)),
      catchError(this.handleError(`Partner`, []))
    );
  }

  /** POST: add a new partner to the server */
  addPartner (partner: Partner): Observable<Partner> {
    return this.httpc.post<Partner>(this.partnerUrl, partner, httpOptions).pipe(
      tap(_ => this.log(`added partner w/ id=${partner.id}`)),
      catchError(this.handleError<Partner>('addPartner'))
    );
  }

  deletePartner (partner: Partner | number): Observable<Partner> {
    const id = typeof partner === 'number' ? partner : partner.id;
    const url = `${this.partnerUrl}/${id}`;

    return this.httpc.delete<Partner>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted partner id=${id}`)),
      catchError(this.handleError<Partner>('deletePartner'))
    );
  }

  getClient(): Observable<Client[]> {
    const url = `${this.clientUrl}`;
    return this.httpc.get<Client[]>(url).pipe(
      tap(_ => this.log(`fetched Client`)),
      catchError(this.handleError(`Client`, []))
    );
  }

  uploadFile(formData: FormData, headers: Headers) {
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.uploadUrl}`, formData, options)
            // .map(res => res.json())
            // .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            );
            // .pipe(
            //   tap(_ => this.log(`deleted partner id=${formData.get('uploadFile')}`)),
            //   // catchError(this.handleError<Partner>('deletePartner'))
            // );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Testcase[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.httpc.get<Testcase[]>(`api/testcase/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Testcase[]>('searchTestcase', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
    // this.messageService.add('HeroService: ' + message);
  }
}
