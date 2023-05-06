import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDetailsService } from '../../apis/view-details.service';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  lista: any[] = []

  constructor(
    public api: ViewDetailsService,
    private activated: ActivatedRoute,
    private router:Router
    ) {
    const id = this.activated.snapshot.params.id;
    this.api.getID(id).subscribe(data => {
      this.lista = data

      console.log(this.lista)
    })

   }

  ngOnInit(): void {
  }

  prev(){
    this.router.navigate((['books/all']))
  }

}
