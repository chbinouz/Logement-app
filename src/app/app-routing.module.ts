import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddLogementComponent } from './add-logement/add-logement.component';
import { ApercuComponent } from './apercu/apercu.component';
import { ChercherLogementComponent } from './chercher-logement/chercher-logement.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { ModifierLogementComponent } from './modifier-logement/modifier-logement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresComponent } from './offres/offres.component';


const routes: Routes = [
  {path:"offres",component:OffresComponent,children:[
    {path:"ajouter-logement",component:AddLogementComponent},
    {path:"modifier-logement/:id",component:ModifierLogementComponent},
    {path:"Afficher-logement",component:DisplayAllComponent},
    {path:"chercher",component:ChercherLogementComponent},
    {path:"apercu-logement/:id",component:ApercuComponent}
  ]},
  {path:"",component:AcceuilComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
