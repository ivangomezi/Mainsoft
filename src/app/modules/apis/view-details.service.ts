import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewDetailsService {

  Url = 'https://localhost:44322/';
  Api = 'api/Details';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.Url + this.Api);
  }

  getID(id: any): Observable<any> {
    return this.http.get(this.Url + this.Api + '/' + id);
  }
}
