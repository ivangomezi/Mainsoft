import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autores } from '../../model/Autores';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  Url = 'https://localhost:44322/';
  Api = 'api/Autores';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.Url + this.Api);
  }

  post(data: Autores): Observable<Autores>{
    return this.http.post<Autores>(this.Url + this.Api, data);
  }

  detele(id: any): Observable<any> {
    return this.http.delete(this.Url + this.Api + '/' + id);
  }
}
