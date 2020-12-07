import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logement } from '../models/Logement';
import { LogementService } from '../services/logement.service';

@Component({
  selector: 'app-modifier-logement',
  templateUrl: './modifier-logement.component.html',
  styleUrls: ['./modifier-logement.component.css']
})
export class ModifierLogementComponent implements OnInit {
  logement:Logement;
  constructor(private logServ:LogementService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(res=>{this.logServ.getLogementById(+res.get('id')).subscribe(res=>{
        this.logement=res;
      })
    })

    
  }
  affecterLat(lat:number){
    this.logement.lat=lat;
  }
  affecterLng(lng:number){
    this.logement.lng=lng;
  }
  modifier(logement:Logement,id:number){
    this.logServ.modifierLogement(logement,id).subscribe(res=>this.router.navigateByUrl("/Afficher-logement"));
    this.logement=new Logement();
  }


}
