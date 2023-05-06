import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoresLibros } from '../../model/AutoresLibros';

@Injectable({
  providedIn: 'root'
})
export class AutorLibroService {
  Url = 'https://localhost:44322/';
  Api = 'api/AutoresLibros';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.Url + this.Api);
  }

  getId(id:any): Observable<any> {
    return this.http.get(this.Url + this.Api + "/" + id);
  }

  post(data: AutoresLibros): Observable<AutoresLibros>{
    return this.http.post<AutoresLibros>(this.Url + this.Api, data);
  }

  detele(id: any): Observable<any> {
    return this.http.delete(this.Url + this.Api + '/' + id);
  }
}
