import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Logement } from '../models/Logement';
import { LogementService } from '../services/logement.service';

@Component({
  selector: 'app-apercu',
  templateUrl: './apercu.component.html',
  styleUrls: ['./apercu.component.css']
})
export class ApercuComponent implements OnInit {
  logement:Logement;
  constructor(private logServ:LogementService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>this.logServ.getLogementById(+res.get('id')).subscribe(res=>this.logement=res))
  }

  

}
