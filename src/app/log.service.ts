import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { logIn, regIn } from './model/logIn';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public url: string = 'http://localhost:3300/details';
  constructor(private http: HttpClient,
  ) { }

  getDetails(): Observable<any> {
    return this.http.get(this.url);
  }

  logDetails(data: logIn): Observable<any> {
    return this.http.post(this.url + "/login", data);
  }

  regDetails(data: regIn): Observable<any> {
    return this.http.post(this.url, data);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('logIn');
    return !helper.isTokenExpired(token);
  } 
}
