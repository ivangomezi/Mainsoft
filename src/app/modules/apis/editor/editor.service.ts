import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editoriales } from '../../model/Editoriales';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  Url = 'https://localhost:44322/';
  Api = 'api/Editoriales';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.Url + this.Api);
  }

  post(data: Editoriales): Observable<Editoriales>{
    return this.http.post<Editoriales>(this.Url + this.Api, data);
  }
}
