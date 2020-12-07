import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logement } from '../models/Logement';
import { LogementService } from '../services/logement.service';

@Component({
  selector: 'app-add-logement',
  templateUrl: './add-logement.component.html',
  styleUrls: ['./add-logement.component.css']
})
export class AddLogementComponent implements OnInit {
  logementForm: FormGroup;
  fb:FormBuilder=new FormBuilder();
  logement:Logement=new Logement();
  list:Logement[]=[];
  activate:boolean=false;
  constructor(private logServ:LogementService) { }

  ngOnInit(): void {
    this.logementForm=this.fb.group({
      reference:["",[Validators.required]],
      adresse:["",[Validators.required,Validators.minLength(5)]],
      gouvernorat:["",[Validators.required]],
      type:["",[Validators.required,Validators.pattern("s[+][0-9]")]],
      description:["",Validators.required],
      prix:["",[Validators.required,Validators.pattern("[0-9]*")]]
    });
    this.logServ.getAll().subscribe(res=>{
      this.list=res;
      console.log(res);
    });
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
  affecterLat(lat:number){
    this.logement.lat=lat;
  }
  affecterLng(lng:number){
    this.logement.lng=lng;
  }
  submit(){
    this.logServ.ajouterLogement(this.logement).subscribe(res=>this.list.push(res));
    console.log(this.list);
    console.log("hello");
    this.logement=new Logement();
    
  }
  suppLogement(id:Logement){
    this.logServ.supprimerParRef(id).subscribe(next=>this.logServ.getAll().subscribe(next=>this.list=next));
  }

  touched(){
    this.activate=true;
    console.log(this.activate)
  }
}
