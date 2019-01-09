import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { logIn, regIn } from './model/logIn';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public url: string = 'http://localhost:3300/details';
  constructor(private http: HttpClient) { }

  getDetails(): Observable<any> {
    return this.http.get(this.url);
  }

  logDetails(data: logIn): Observable<any> {
    return this.http.post(this.url + "/login", data);
  }

  regDetails(data: regIn): Observable<any> {
    return this.http.post(this.url, data);
  }
}
