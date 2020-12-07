import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Logement } from '../models/Logement';
import { LogementService } from '../services/logement.service';

@Component({
  selector: 'app-chercher-logement',
  templateUrl: './chercher-logement.component.html',
  styleUrls: ['./chercher-logement.component.css']
})
export class ChercherLogementComponent implements OnInit {
  logement:Logement=new Logement();
  list:Logement[];
  logementForm:FormGroup;
  fb:FormBuilder=new FormBuilder();
  display:boolean=false;
  rech:string[]=[];
  ch:string="";
  constructor(private logServ:LogementService) { }

  ngOnInit(): void {
    this.logementForm=this.fb.group({
      reference:[""],
      adresse:[""],
      gouvernorat:[""],
      type:[""],
      description:[""],
      prix:[""]
    });
    this.chercher();
  }

  get reference(){
    return this.logementForm.get("reference");
  }
  get adresse(){
    return this.logementForm.get("adresse");
  }
  get type(){
    return this.logementForm.get("type");
  }
  get gouvernorat(){
    return this.logementForm.get("gouvernorat");
  }
  get description(){
    return this.logementForm.get("description");
  }
  get prix(){
    return this.logementForm.get("prix");
  }
  
  chercher(){
    console.log(this.logement);
    for(var v in this.logement){
      if(this.logement[v]!=undefined && this.logement[v]!="" )
        this.rech.push(v+"="+this.logement[v]+"&")
    }
    console.log(this.rech)
    for(let i=0;i<this.rech.length;i++){
      this.ch=this.ch+this.rech[i];
    }
    console.log(this.ch);
    this.logServ.rechercheMultiple(this.ch).subscribe(res=>this.list=res);
    this.rech=[];
    this.display=true;
    this.ch="";
  }

  onKey(event:any){
    if(event.target.value)
      this.logServ.rechercheMultiple("prix="+event.target.value).subscribe(res=>this.list=res)
    else
    this.logServ.rechercheMultiple("").subscribe(res=>this.list=res)
  }

}
