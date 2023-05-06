import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorService } from '../../apis/autor/autor.service';
import { Autores } from '../../model/Autores';

@Component({
  selector: 'app-dashboard-autor',
  templateUrl: './dashboard-autor.component.html',
  styleUrls: ['./dashboard-autor.component.css']
})
export class DashboardAutorComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private Api: AutorService,
    private router: Router
  ) {

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]]
    });

   }

  ngOnInit(): void {
  }

  add(){
    const t : Autores = {
      Nombre: this.form.get('nombre')?.value,
      Apellido: this.form.get('apellido')?.value
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
