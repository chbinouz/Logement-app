import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Logement } from '../models/Logement';
import { LogementService } from '../services/logement.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit , OnChanges{
  
  constructor(private logServ:LogementService) { }
  logement:Logement[]=[];
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
    
  }
  ngOnInit(): void {
    this.logServ.getAll().subscribe(next=>this.logServ.getAll().subscribe(next=>this.logement=next),err=>{
      console.log(err);
    }
    )
  }

}
