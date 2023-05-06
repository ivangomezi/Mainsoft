import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDetailsService } from '../../apis/view-details.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  lista: any[] = []

  constructor(public api: ViewDetailsService, private router:Router) {
    this.api.getAll().subscribe(data => {
      this.lista = data

      console.log(this.lista)
    })

   }

  ngOnInit(): void {
  }

  detalleBook(id:any){
    let id_ = id.target.id
    this.router.navigate((['books/' + id_]))
  }

}
