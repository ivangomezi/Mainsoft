import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from '../../model/Libros';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  Url = 'https://localhost:44322/';
  Api = 'api/Libros';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.Url + this.Api);
  }

  post(data: Libros): Observable<Libros>{
    return this.http.post<Libros>(this.Url + this.Api, data);
  }

  detele(id: any): Observable<any> {
    return this.http.delete(this.Url + this.Api + '/' + id);
  }
}
