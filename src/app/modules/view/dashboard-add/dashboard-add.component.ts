import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorService } from '../../apis/autor/autor.service';
import { AutorLibroService } from '../../apis/autorLibro/autor-libro.service';
import { BookService } from '../../apis/book/book.service';
import { AutoresLibros } from '../../model/AutoresLibros';

@Component({
  selector: 'app-dashboard-add',
  templateUrl: './dashboard-add.component.html',
  styleUrls: ['./dashboard-add.component.css']
})
export class DashboardAddComponent implements OnInit {

  dropLibro: any[] = [];
  dropAutor: any[] = [];
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private ApiLibro: BookService,
    private ApiAutor: AutorService,
    private Api: AutorLibroService,
    private router: Router
  ) {

    this.form = this.formBuilder.group({
      idLibro: ['', [Validators.required]],
      idAutor: ['', [Validators.required]]
    });

    this.ApiLibro.get().subscribe(data => {
      this.dropLibro = data
    })

    this.ApiAutor.get().subscribe(data => {
      this.dropAutor = data
    })

   }

  ngOnInit(): void {
  }

  add(){
    const t : AutoresLibros = {
      IdAutor: parseInt(this.form.get('idAutor')?.value),
      IdLibro: parseInt(this.form.get('idLibro')?.value)
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
