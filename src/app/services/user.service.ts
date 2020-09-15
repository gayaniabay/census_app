import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, delay, catchError, map } from 'rxjs/operators';

import { URL } from '../const/url'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData(){
    return this.http.get((URL.usersURL)).pipe(
      map((res: any) => res)
    );
  }
}
