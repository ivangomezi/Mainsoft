import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorService } from '../../apis/autor/autor.service';
import { AutorLibroService } from '../../apis/autorLibro/autor-libro.service';
import { BookService } from '../../apis/book/book.service';
import { EditorService } from '../../apis/editor/editor.service';
import { ViewDetailsService } from '../../apis/view-details.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  lista: any[] = [];
  listAutor: any[] = [];
  listLibro: any[] = [];
  listEditor: any[] = [];

  constructor(
    public api: ViewDetailsService,
    public apiAutor: AutorService,
    public apiLibro: BookService,
    public apiEditor: EditorService,
    public apiRelation: AutorLibroService,
    private router:Router) 
  {

    this.api.getAll().subscribe(data => {
      this.lista = data
    })
    this.apiAutor.get().subscribe(data => {
      this.listAutor = data
    })
    this.apiLibro.get().subscribe(data => {
      this.listLibro = data
    })
    this.apiEditor.get().subscribe(data => {
      this.listEditor = data
    })
  }

  ngOnInit(): void {
  }

  //Autores
  clickDeleteAutor(id:any) {
    let id_ = id.target.id
    this.apiAutor.detele(id_).subscribe(data => {
      this.listAutor = data
    }), (error: any) => {
      //console.log(error);
      alert("Autor con relacionado a un libro.");
    }
  }
  clickAutor(){
    this.router.navigate((['admin/dashboard/autor']))
  }
  //Autores

  clickAdd() {
    this.router.navigate((['admin/dashboard/add']))
  }
  clickLibro() {
    this.router.navigate((['admin/dashboard/libro']))
  }
  clickEditor(){
    this.router.navigate((['admin/dashboard/editorial']))
  }
}
