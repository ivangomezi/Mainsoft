import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsViewComponent } from './modules/view/details-view/details-view.component';
import { HomeViewComponent } from './modules/view/home-view/home-view.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DetailsBookComponent } from './modules/view/details-book/details-book.component';
import { DashboardViewComponent } from './modules/view/dashboard-view/dashboard-view.component';
import { DashboardAutorComponent } from './modules/view/dashboard-autor/dashboard-autor.component';
import { DashboardLibroComponent } from './modules/view/dashboard-libro/dashboard-libro.component';
import { DashboardEditorialComponent } from './modules/view/dashboard-editorial/dashboard-editorial.component';
import { DashboardAddComponent } from './modules/view/dashboard-add/dashboard-add.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsViewComponent,
    HomeViewComponent,
    HeaderComponent,
    FooterComponent,
    DetailsBookComponent,
    DashboardViewComponent,
    DashboardAutorComponent,
    DashboardLibroComponent,
    DashboardEditorialComponent,
    DashboardAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
