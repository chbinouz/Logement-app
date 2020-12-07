import { Component, OnInit } from '@angular/core';
import { Logement } from '../models/Logement';
import { LogementService } from '../services/logement.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {
  list:Logement[]=[];
  filter='';
  num=+this.filter;
  res:boolean=false;
  constructor(private logServ:LogementService) { }

  ngOnInit(): void {
    this.logServ.getAll().subscribe(serv=>{
      this.list=serv;
    },err=>{
      console.log(err);
    })
  }
  toInt(n:string){
    return +n;
  }

  supprimer(log:Logement){
    this.logServ.supprimerParRef(log).subscribe(next=>this.logServ.getAll().subscribe(next=>this.list=next));
  }

  filterFunction(){
    for(let log of this.list){
      if(+this.filter>log.prix){
        return this.res=true;
      }else
      return this.res=false;
    }
  }

}
