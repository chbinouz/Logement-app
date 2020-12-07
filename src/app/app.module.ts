import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { OffresComponent } from './offres/offres.component';
import { AddLogementComponent } from './add-logement/add-logement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DisplayAllComponent } from './display-all/display-all.component';
import { ListLogementComponent } from './list-logement/list-logement.component';
import { ModifierLogementComponent } from './modifier-logement/modifier-logement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { ChercherLogementComponent } from './chercher-logement/chercher-logement.component';
import { ApercuComponent } from './apercu/apercu.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    OffresComponent,
    AddLogementComponent,
    DisplayAllComponent,
    ListLogementComponent,
    ModifierLogementComponent,
    NotFoundComponent,
    MapComponent,
    ChercherLogementComponent,
    ApercuComponent,
    AcceuilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUzqDbvnd0aV1sC5BPYr4LkQbDb7Ui7KM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
