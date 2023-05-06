import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './modules/view/home-view/home-view.component';
import { DetailsViewComponent } from './modules/view/details-view/details-view.component';
import { DetailsBookComponent } from './modules/view/details-book/details-book.component';
import { DashboardViewComponent } from './modules/view/dashboard-view/dashboard-view.component'
import { DashboardAutorComponent } from './modules/view/dashboard-autor/dashboard-autor.component'
import { DashboardLibroComponent } from './modules/view/dashboard-libro/dashboard-libro.component'
import { DashboardEditorialComponent } from './modules/view/dashboard-editorial/dashboard-editorial.component'
import { DashboardAddComponent } from './modules/view/dashboard-add/dashboard-add.component'

const routes: Routes = [

  { path: 'home', component: HomeViewComponent },
  { path: 'books/all', component: DetailsViewComponent },
  { path: 'books/:id', component: DetailsBookComponent },
  { path: 'admin/dashboard', component: DashboardViewComponent },
  { path: 'admin/dashboard/autor', component: DashboardAutorComponent },
  { path: 'admin/dashboard/libro', component: DashboardLibroComponent },
  { path: 'admin/dashboard/editorial', component: DashboardEditorialComponent },
  { path: 'admin/dashboard/add', component: DashboardAddComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
