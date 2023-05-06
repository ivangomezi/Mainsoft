import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../apis/book/book.service';
import { EditorService } from '../../apis/editor/editor.service';
import { Editoriales } from '../../model/Editoriales';
import { Libros } from '../../model/Libros';

@Component({
  selector: 'app-dashboard-libro',
  templateUrl: './dashboard-libro.component.html',
  styleUrls: ['./dashboard-libro.component.css']
})
export class DashboardLibroComponent implements OnInit {

  dropEditor: any[] = [];
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private Api: BookService,
    private ApiEditor: EditorService,
    private router: Router
  ) {

    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      sinopsis: ['', [Validators.required]],
      paginas: ['', [Validators.required]],
      editor: ['', [Validators.required]]
    });

    this.ApiEditor.get().subscribe(data => {
      this.dropEditor = data
    })

   }

  ngOnInit(): void {
  }

  add(){
    const t : Libros = {
      Titulo: this.form.get('titulo')?.value,
      Sinopsis: this.form.get('sinopsis')?.value,
      NPaginas: this.form.get('paginas')?.value,
      IdEditorial: parseInt(this.form.get('editor')?.value)
    }

    if(!this.form.status.includes('INVALID')){
      this.Api.post(t).subscribe(data => {
        this.form.reset();
        this.router.navigate(['admin/dashboard']);
      }), (error: any) => {
        console.log(error);
      }
    }
  }

}
