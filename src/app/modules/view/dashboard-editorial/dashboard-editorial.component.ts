import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditorService } from '../../apis/editor/editor.service';
import { Editoriales } from '../../model/Editoriales';

@Component({
  selector: 'app-dashboard-editorial',
  templateUrl: './dashboard-editorial.component.html',
  styleUrls: ['./dashboard-editorial.component.css']
})
export class DashboardEditorialComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private Api: EditorService,
    private router: Router
  ) {

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      sede: ['', [Validators.required]]
    });

   }

  ngOnInit(): void {
  }

  add(){
    const t : Editoriales = {
      Nombre: this.form.get('nombre')?.value,
      Sede: this.form.get('sede')?.value
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
